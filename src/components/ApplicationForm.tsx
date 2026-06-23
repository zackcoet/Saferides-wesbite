import { useState } from "react";
import { useForm, Controller, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signInAnonymously } from "firebase/auth";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { auth, db, storage } from "@/lib/firebase";

const MAX_RESUME_BYTES = 5 * 1024 * 1024; // 5MB
const PDF_MIME = "application/pdf";

// Roles for which a portfolio / previous-work link is relevant.
const PORTFOLIO_ROLES = ["Motion Designer or Content Creator", "Marketing Manager"];

// Static list of US universities for the School autocomplete (no external API).
const UNIVERSITIES = [
  "University of South Carolina",
  "Clemson University",
  "University of Georgia",
  "University of Tennessee",
  "University of Alabama",
  "Auburn University",
  "Florida State University",
  "University of Florida",
  "Georgia Tech",
  "University of Mississippi",
  "Mississippi State University",
  "Louisiana State University",
  "University of Arkansas",
  "University of Kentucky",
  "University of Louisville",
  "Vanderbilt University",
  "Wake Forest University",
  "Duke University",
  "University of North Carolina",
  "NC State University",
  "Virginia Tech",
  "University of Virginia",
  "Penn State University",
  "Ohio State University",
  "University of Michigan",
  "Michigan State University",
  "Indiana University",
  "Purdue University",
  "University of Wisconsin",
  "University of Minnesota",
  "Northwestern University",
  "University of Illinois",
  "University of Iowa",
  "Iowa State University",
  "University of Missouri",
  "Kansas State University",
  "University of Kansas",
  "University of Nebraska",
  "Colorado State University",
  "University of Colorado",
  "University of Utah",
  "Arizona State University",
  "University of Arizona",
  "University of Oregon",
  "Oregon State University",
  "University of Washington",
  "Washington State University",
  "UCLA",
  "USC",
  "UC Berkeley",
  "UC San Diego",
  "UC Davis",
  "Stanford University",
  "Harvard University",
  "Yale University",
  "Columbia University",
  "NYU",
  "Boston University",
  "Northeastern University",
  "Syracuse University",
  "Fordham University",
  "George Washington University",
  "American University",
  "Georgetown University",
  "Temple University",
  "Drexel University",
  "Tulane University",
  "Emory University",
  "University of Miami",
  "University of Tampa",
  "Florida International University",
  "University of Central Florida",
  "University of South Florida",
  "Marquette University",
  "DePaul University",
  "Loyola University Chicago",
  "University of Denver",
  "Baylor University",
  "Texas A&M University",
  "University of Texas",
  "Texas Tech University",
  "TCU",
  "SMU",
  "Rice University",
  "University of Houston",
];

const applicationSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required"),
  lastName: z.string().trim().min(1, "Last name is required"),
  school: z.string().trim().optional(),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Enter a valid email address"),
  phone: z.string().trim().min(1, "Phone number is required"),
  role: z.enum(
    ["Campus Representative", "Intern", "Marketing Manager", "Motion Designer or Content Creator", "Sales Intern"],
    {
      required_error: "Please select a role",
    },
  ),
  portfolioLink: z.string().trim().optional(),
  resume: z
    .custom<FileList>(
      (value) => value instanceof FileList && value.length > 0,
      "Resume is required",
    )
    .refine(
      (files) => files?.[0]?.type === PDF_MIME,
      "Resume must be a PDF file",
    )
    .refine(
      (files) => (files?.[0]?.size ?? 0) <= MAX_RESUME_BYTES,
      "Resume must be 5MB or smaller",
    ),
});

type ApplicationValues = z.infer<typeof applicationSchema>;

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export default function ApplicationForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ApplicationValues>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      school: "",
      email: "",
      phone: "",
      portfolioLink: "",
    },
  });

  // Show the portfolio field only for Motion Designer or Content Creator / Marketing Manager.
  const selectedRole = useWatch({ control, name: "role" });
  const showPortfolio = PORTFOLIO_ROLES.includes(selectedRole as string);

  // School autocomplete: filter the static university list by any substring.
  const schoolReg = register("school");
  const [schoolOpen, setSchoolOpen] = useState(false);
  const schoolQuery = ((useWatch({ control, name: "school" }) as string) ?? "")
    .trim()
    .toLowerCase();
  const schoolSuggestions =
    schoolQuery.length >= 2
      ? UNIVERSITIES.filter((u) => u.toLowerCase().includes(schoolQuery)).slice(
          0,
          6,
        )
      : [];

  const onSubmit = async (values: ApplicationValues) => {
    setStatus("submitting");

    const file = values.resume[0];

    // Reject non-PDF or oversized files before attempting any upload.
    if (file.type !== PDF_MIME || file.size > MAX_RESUME_BYTES) {
      setStatus("error");
      return;
    }

    const name = `${values.firstName} ${values.lastName}`.trim();
    const portfolioLink =
      showPortfolio && values.portfolioLink && values.portfolioLink.trim()
        ? values.portfolioLink.trim()
        : null;

    try {
      // Best-effort anonymous auth. The Storage and Firestore rules for these
      // public intake paths allow unauthenticated writes, so a failure here
      // (e.g. anonymous auth disabled) should not block the submission.
      try {
        await signInAnonymously(auth);
      } catch (authError) {
        console.warn(
          "Anonymous sign-in failed; continuing unauthenticated.",
          authError,
        );
      }

      const timestamp = Date.now();
      const safeName = name.replace(/[^a-zA-Z0-9]+/g, "_") || "applicant";
      const resumeStoragePath = `applications/${timestamp}_${safeName}.pdf`;

      // Storage upload must complete before we write to Firestore. If the upload
      // throws, we fall through to catch and never create the Firestore record.
      const storageRef = ref(storage, resumeStoragePath);
      await uploadBytes(storageRef, file, { contentType: PDF_MIME });
      const resumeUrl = await getDownloadURL(storageRef);

      await addDoc(collection(db, "jobApplications"), {
        name,
        email: values.email,
        phone: values.phone,
        role: values.role,
        portfolioLink,
        resumeUrl,
        resumeStoragePath,
        // school is optional; Firestore rejects undefined, so coalesce to null.
        school: values.school ?? null,
        status: "pending",
        submittedAt: serverTimestamp(),
      });

      setStatus("success");
      reset();
    } catch (error) {
      // Detailed diagnostics in the console; the user only sees a generic message.
      const e = error as { code?: string; message?: string; stack?: string };
      console.error(
        "Application submission failed:\n",
        "code:",
        e?.code,
        "\nmessage:",
        e?.message,
        "\nstack:",
        e?.stack,
        "\nraw error:",
        error,
      );
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-[#1740A6]/15 bg-white p-8 sm:p-10 text-center">
        <p className="font-display font-bold text-lg text-[#1740A6]">
          Application received. We will be in touch.
        </p>
      </div>
    );
  }

  const isSubmitting = status === "submitting";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-2xl border border-[#1740A6]/15 bg-white p-6 sm:p-10 flex flex-col gap-6"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-[#1740A6]">
            First Name
          </Label>
          <Input
            id="firstName"
            autoComplete="given-name"
            disabled={isSubmitting}
            {...register("firstName")}
          />
          {errors.firstName && (
            <p className="text-sm font-medium text-[#1740A6]">
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-[#1740A6]">
            Last Name
          </Label>
          <Input
            id="lastName"
            autoComplete="family-name"
            disabled={isSubmitting}
            {...register("lastName")}
          />
          {errors.lastName && (
            <p className="text-sm font-medium text-[#1740A6]">
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="school" className="text-[#1740A6]">
          School (optional)
        </Label>
        <div className="relative">
          <Input
            id="school"
            autoComplete="off"
            disabled={isSubmitting}
            {...schoolReg}
            onChange={(e) => {
              schoolReg.onChange(e);
              setSchoolOpen(true);
            }}
            onKeyDown={(e) => {
              if (e.key === "Escape") setSchoolOpen(false);
            }}
          />
          {schoolOpen && schoolSuggestions.length > 0 && (
            <ul
              className="absolute left-0 right-0 top-full mt-1 overflow-hidden rounded-[8px] border border-[#1740A6]/20 bg-white"
              style={{ zIndex: 50 }}
            >
              {schoolSuggestions.map((u) => (
                <li key={u}>
                  <button
                    type="button"
                    onClick={() => {
                      setValue("school", u);
                      setSchoolOpen(false);
                    }}
                    className="block w-full text-left font-body font-normal text-[#1740A6] hover:bg-[#1740A608]"
                    style={{ padding: "10px 14px" }}
                  >
                    {u}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-[#1740A6]">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="your@email.com"
          disabled={isSubmitting}
          {...register("email")}
        />
        {errors.email && (
          <p className="text-sm font-medium text-[#1740A6]">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-[#1740A6]">
          Phone Number
        </Label>
        <Input
          id="phone"
          type="tel"
          autoComplete="tel"
          placeholder="Your phone number"
          disabled={isSubmitting}
          {...register("phone")}
        />
        {errors.phone && (
          <p className="text-sm font-medium text-[#1740A6]">
            {errors.phone.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="role" className="text-[#1740A6]">
          Role applying for
        </Label>
        <Controller
          control={control}
          name="role"
          render={({ field }) => (
            <Select
              value={field.value}
              onValueChange={field.onChange}
              disabled={isSubmitting}
            >
              <SelectTrigger id="role" className="text-[#1740A6]">
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Campus Representative">
                  Campus Representative
                </SelectItem>
                <SelectItem value="Intern">Intern</SelectItem>
                <SelectItem value="Marketing Manager">
                  Marketing Manager
                </SelectItem>
                <SelectItem value="Motion Designer or Content Creator">
                  Motion Designer or Content Creator
                </SelectItem>
                <SelectItem value="Sales Intern">Sales Intern</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        {errors.role && (
          <p className="text-sm font-medium text-[#1740A6]">
            {errors.role.message}
          </p>
        )}
      </div>

      {showPortfolio && (
        <div className="space-y-2">
          <Label htmlFor="portfolioLink" className="text-[#1740A6]">
            Portfolio or previous work link (optional)
          </Label>
          <Input
            id="portfolioLink"
            type="url"
            placeholder="https://"
            disabled={isSubmitting}
            {...register("portfolioLink")}
          />
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="resume" className="text-[#1740A6]">
          Upload your resume (PDF)
        </Label>
        <Input
          id="resume"
          type="file"
          accept="application/pdf"
          disabled={isSubmitting}
          className="text-[#1740A6] file:text-[#1740A6] file:font-medium"
          {...register("resume")}
        />
        {errors.resume && (
          <p className="text-sm font-medium text-[#1740A6]">
            {errors.resume.message as string}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-[#1740A6] px-8 py-4 h-auto text-base font-bold text-white hover:bg-[#1740A6]/90"
      >
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </Button>

      {status === "error" && (
        <p className="text-sm font-medium text-[#1740A6]">
          Something went wrong submitting your application. Please try again.
        </p>
      )}
    </form>
  );
}
