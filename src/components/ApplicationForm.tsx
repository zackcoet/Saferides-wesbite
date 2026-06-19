import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
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

const applicationSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required"),
  lastName: z.string().trim().min(1, "Last name is required"),
  school: z.string().trim().min(1, "School is required"),
  // NOTE: This .edu check is client-side only. Server-side validation of the
  // email domain should be added later (e.g. a Cloud Function) before trusting it.
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Enter a valid email address")
    .refine(
      (value) => value.toLowerCase().endsWith(".edu"),
      "Email must be a .edu address",
    ),
  role: z.enum(["Campus Representative", "Intern", "Marketing Manager"], {
    required_error: "Please select a role",
  }),
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
    formState: { errors },
  } = useForm<ApplicationValues>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      school: "",
      email: "",
    },
  });

  const onSubmit = async (values: ApplicationValues) => {
    setStatus("submitting");

    const file = values.resume[0];

    // Reject non-PDF or oversized files before attempting any upload.
    if (file.type !== PDF_MIME || file.size > MAX_RESUME_BYTES) {
      setStatus("error");
      return;
    }

    try {
      // Anonymous auth matches the rest of the site's Firebase access pattern.
      await signInAnonymously(auth);

      const timestamp = Date.now();
      const path = `applications/${timestamp}_${values.lastName}_${values.firstName}.pdf`;

      // Storage upload must complete before we write to Firestore. If the upload
      // throws, we fall through to catch and never create the Firestore record.
      const storageRef = ref(storage, path);
      await uploadBytes(storageRef, file, { contentType: PDF_MIME });
      const resumeUrl = await getDownloadURL(storageRef);

      await addDoc(collection(db, "applications"), {
        firstName: values.firstName,
        lastName: values.lastName,
        school: values.school,
        email: values.email,
        role: values.role,
        resumeUrl,
        submittedAt: serverTimestamp(),
        status: "pending",
      });

      setStatus("success");
      reset();
    } catch (error) {
      // Do not expose Firebase error details to the user.
      console.error("Application submission failed:", error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-[#1740A6]/15 bg-white p-8 sm:p-10 text-center">
        <p className="text-lg font-semibold text-[#1740A6]">
          Application received. We will be in touch soon.
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
          School
        </Label>
        <Input
          id="school"
          autoComplete="organization"
          disabled={isSubmitting}
          {...register("school")}
        />
        {errors.school && (
          <p className="text-sm font-medium text-[#1740A6]">
            {errors.school.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-[#1740A6]">
          School Email (.edu)
        </Label>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="you@school.edu"
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

      <div className="space-y-2">
        <Label htmlFor="resume" className="text-[#1740A6]">
          Resume (PDF, max 5MB)
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

      {status === "error" && (
        <p className="text-sm font-medium text-[#1740A6]">
          Something went wrong submitting your application. Please try again.
        </p>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-[#1740A6] px-8 py-4 h-auto text-base font-bold text-white hover:bg-[#1740A6]/90"
      >
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </Button>
    </form>
  );
}
