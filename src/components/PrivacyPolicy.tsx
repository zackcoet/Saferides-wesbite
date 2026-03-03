import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const PrivacyPolicy = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="h-auto p-0 text-sm text-gray-600 hover:text-royal-blue">
          Privacy Policy
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-bold text-gray-900">
            SafeRides™ Privacy Policy (United States)
          </DialogTitle>
          <p className="text-sm text-gray-600 mt-2">Effective Date: March 3, 2026 • Last Updated: March 3, 2026</p>
        </DialogHeader>
        <ScrollArea className="px-6 pb-6 max-h-[60vh]">
          <div className="space-y-6 text-sm leading-relaxed">
            <p className="text-gray-700">
              This Privacy Policy explains how Coetzee Tech Inc. (doing business as SafeRides™, &quot;SafeRides,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, shares, and protects information when you use our services in the United States (the &quot;Services&quot;), including our mobile applications, websites, and related features (such as ride requests, driver onboarding, scheduling, safety tools, and customer support).
            </p>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">1) Who We Are</h3>
              <ul className="space-y-1 text-gray-700">
                <li><strong>Company:</strong> Coetzee Tech Inc. (d/b/a SafeRides™)</li>
                <li><strong>Business Address:</strong> 214 S Gregg St, Apt A, Columbia, SC 29205, United States</li>
                <li><strong>Privacy Contact Email:</strong> saferideshelp@gmail.com</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">2) Scope</h3>
              <p className="text-gray-700 mb-2">This Privacy Policy applies to information we collect from:</p>
              <ul className="space-y-1 text-gray-700 mb-2">
                <li>• Riders who request or take rides</li>
                <li>• Drivers who apply, are onboarded, and provide rides</li>
                <li>• Visitors to our websites and support channels</li>
                <li>• Users of related features (e.g., scheduled rides, referral programs, promotions)</li>
              </ul>
              <p className="text-gray-700">
                <strong>US-only notice:</strong> Our Services covered by this policy are intended for use in the United States. We do not target or market Services to users outside the US under this policy.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">3) Definitions (Quick)</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Personal Information / Personal Data:</strong> Information that identifies, relates to, describes, or could reasonably be linked to you.</li>
                <li>• <strong>Sensitive Personal Information / Sensitive Data:</strong> Certain higher-risk categories (e.g., precise geolocation, government ID numbers, account logins, certain safety-related info), which may receive additional protections.</li>
                <li>• <strong>Processing:</strong> Any operation performed on data (collection, use, storage, sharing, deletion, etc.).</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">4) Information We Collect</h3>
              <p className="text-gray-700 mb-3">We collect information in three main ways: (A) you give it to us, (B) we collect it automatically when you use the Services, and (C) we receive it from third parties.</p>

              <h4 className="font-semibold text-gray-800 mb-2">A) Information You Provide</h4>
              <div className="space-y-3 mb-4">
                <div>
                  <p className="font-medium text-gray-800 mb-1">1) Account and Profile Information</p>
                  <ul className="space-y-1 text-gray-700 list-disc list-inside">
                    <li>Name</li>
                    <li>Email address and/or phone number</li>
                    <li>Profile photo (optional, or required for drivers)</li>
                    <li>Password and authentication details</li>
                    <li>University/school email or verification signals (if applicable to your campus model)</li>
                    <li>Preferred settings (e.g., accessibility needs, safety preferences)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-gray-800 mb-1">2) Rider Information</p>
                  <ul className="space-y-1 text-gray-700 list-disc list-inside">
                    <li>Pickup location and drop-off location (including preset suggestions you choose)</li>
                    <li>Ride requests and ride preferences (e.g., type of ride, price option)</li>
                    <li>Scheduled ride details (destination, date, time)</li>
                    <li>Payment method details (we typically receive tokens and limited card details from payment processors, not full card numbers)</li>
                    <li>Promo codes, discounts, referral codes</li>
                    <li>Communications with drivers and customer support</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-gray-800 mb-1">3) Driver Information</p>
                  <p className="text-gray-700 mb-1">In addition to the above, drivers may provide:</p>
                  <ul className="space-y-1 text-gray-700 list-disc list-inside">
                    <li>Driver&apos;s license and other government-issued IDs</li>
                    <li>Vehicle information (make/model/year, plate number, insurance details, inspection info if required)</li>
                    <li>Background check information (subject to vendor processes and applicable law)</li>
                    <li>Banking/payout details (often handled through a payment processor onboarding flow)</li>
                    <li>Tax-related information if required for payouts</li>
                    <li>Driver availability and ride preference selections (e.g., which ride types you&apos;ll accept)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-gray-800 mb-1">4) Safety and Support Information</p>
                  <ul className="space-y-1 text-gray-700 list-disc list-inside">
                    <li>Incident reports (safety issues, complaints, disputes, lost items)</li>
                    <li>Evidence you provide (messages, screenshots, photos)</li>
                    <li>Emergency contact info (if you choose to add it)</li>
                    <li>Verification code or &quot;ride PIN&quot; you set (if your product uses a rider-set code)</li>
                  </ul>
                  <p className="text-gray-700 mt-2 text-xs italic">Note: If you contact customer support by phone or in-app, we may collect the details of the interaction. If call recording is enabled, you&apos;ll be notified where required by law.</p>
                </div>
              </div>

              <h4 className="font-semibold text-gray-800 mb-2">B) Information We Collect Automatically When You Use the Services</h4>
              <div className="space-y-3 mb-4">
                <div>
                  <p className="font-medium text-gray-800 mb-1">1) Location Information</p>
                  <p className="text-gray-700 mb-1">We may collect:</p>
                  <ul className="space-y-1 text-gray-700 list-disc list-inside">
                    <li>Precise geolocation from your device (with your permission) to enable pickup, routing, ETAs, geofencing, safety features, and fraud prevention.</li>
                    <li>Trip route details during a ride (e.g., start location, route path, drop-off).</li>
                    <li>Driver location while online/available and during trips (to match riders and provide ETAs).</li>
                  </ul>
                  <p className="text-gray-700 mt-2">You can often control location permissions in your device settings. Some features will not work without location access.</p>
                </div>
                <div>
                  <p className="font-medium text-gray-800 mb-1">2) Usage and Device Data</p>
                  <ul className="space-y-1 text-gray-700 list-disc list-inside">
                    <li>Device model, OS version</li>
                    <li>App version</li>
                    <li>Device identifiers (e.g., advertising ID where permitted, push notification token)</li>
                    <li>IP address, approximate location derived from IP</li>
                    <li>Crash logs, performance logs, diagnostic data</li>
                    <li>App interaction data (screens viewed, clicks/taps, session duration)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-gray-800 mb-1">3) Communications and Content</p>
                  <ul className="space-y-1 text-gray-700 list-disc list-inside">
                    <li>Messages sent through the app (where messaging exists)</li>
                    <li>Time and date of communications</li>
                    <li>Delivery and read receipts (if enabled)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-gray-800 mb-1">4) Cookies and Similar Technologies (Web)</p>
                  <p className="text-gray-700">When you use our websites: Cookies, pixels, and similar tools to keep you logged in, remember preferences, measure performance, and support marketing (see Section 10).</p>
                </div>
              </div>

              <h4 className="font-semibold text-gray-800 mb-2">C) Information We Receive From Third Parties</h4>
              <p className="text-gray-700 mb-1">We may receive information from:</p>
              <ul className="space-y-1 text-gray-700 list-disc list-inside">
                <li>Identity verification and background check providers (drivers)</li>
                <li>Payment processors (e.g., to confirm successful payments, chargebacks, payout onboarding status)</li>
                <li>Mapping and navigation providers (e.g., for geocoding, directions, route estimates)</li>
                <li>Analytics and attribution providers (to understand performance and install sources)</li>
                <li>Marketing partners (where permitted)</li>
                <li>Insurance carriers, claims administrators, and safety partners (if incidents occur)</li>
                <li>Law enforcement or government authorities (where legally required or permitted)</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">5) How We Use Information</h3>
              <p className="text-gray-700 mb-2">We use information to operate, improve, and protect SafeRides. Common purposes include:</p>
              <ul className="space-y-2 text-gray-700">
                <li><strong>A) Provide the Services:</strong> Create and manage accounts; enable ride requests, matching, and routing; process payments and payouts; provide receipts and trip history; provide customer support and respond to requests; run scheduled rides and notify drivers/riders.</li>
                <li><strong>B) Safety, Trust, and Security:</strong> Verify identity (especially for driver onboarding); run background checks where permitted/required; detect and prevent fraud, abuse, and unsafe activity; enforce policies (e.g., misuse, harassment, discrimination, payment abuse); support safety features (emergency support, incident response, rider/driver verification flows).</li>
                <li><strong>C) Improve and Personalize:</strong> Fix bugs and optimize performance; understand feature usage and improve UX; personalize content (e.g., suggestions, preferences).</li>
                <li><strong>D) Communications:</strong> Send service messages (trip updates, confirmations, security alerts); respond to support tickets; send marketing messages where permitted (you can opt out).</li>
                <li><strong>E) Legal and Compliance:</strong> Meet legal obligations; resolve disputes; maintain business records; protect rights, safety, and property.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">6) How We Share Information</h3>
              <p className="text-gray-700 mb-2">
                We do not sell your personal information in the way most people mean &quot;sell&quot; (i.e., handing your data to random third parties for cash). But some US state laws define &quot;sale&quot; and &quot;sharing&quot; broadly (including certain targeted advertising). We address opt-outs in Section 12.
              </p>
              <p className="text-gray-700 mb-2">We may share information with:</p>
              <ul className="space-y-2 text-gray-700">
                <li><strong>A) Between Riders and Drivers (Core Rideshare Function):</strong> Rider first name and profile photo (if provided); pickup and drop-off locations (or approximate until pickup); trip status, ETA, and route guidance; vehicle and driver details (name, photo, vehicle make/model/plate); safety-related information necessary to complete the ride.</li>
                <li><strong>B) Service Providers (Vendors/Processors):</strong> Cloud hosting and databases; payment processing and payout onboarding; SMS/email delivery providers; customer support tools; analytics tools; mapping/geocoding and route providers; identity verification and background check providers (drivers). They may process data only on our instructions (or as otherwise permitted by law and contract).</li>
                <li><strong>C) Affiliates and Business Transfers:</strong> If SafeRides is involved in a merger, acquisition, financing, or asset sale, information may be transferred as part of that transaction (subject to applicable law).</li>
                <li><strong>D) Legal, Safety, and Enforcement:</strong> Law enforcement, courts, regulators, or government agencies when required or permitted by law; third parties to protect rights, safety, and security; insurance carriers or claims administrators when relevant to an incident.</li>
                <li><strong>E) With Your Consent:</strong> If you choose to connect SafeRides to a third-party service or explicitly ask us to share information, we will do so with your permission.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">7) Data Retention</h3>
              <p className="text-gray-700 mb-2">We retain information only as long as necessary for the purposes described in this policy, including to: provide the Services; meet legal and accounting obligations; resolve disputes; enforce policies and prevent fraud.</p>
              <p className="text-gray-700 mb-2">Retention depends on the type of data:</p>
              <ul className="space-y-1 text-gray-700">
                <li>• Account data may be retained while your account is active.</li>
                <li>• Trip and payment records may be retained longer for legal, tax, and accounting reasons.</li>
                <li>• Safety and incident records may be retained longer where needed to protect users and the platform.</li>
                <li>• When you request deletion, we may still keep certain information to comply with law or for legitimate business needs.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">8) Security</h3>
              <p className="text-gray-700">
                We use administrative, technical, and physical safeguards designed to protect information. No system is perfectly secure, and we cannot guarantee absolute security. You are responsible for keeping your login credentials confidential and for using device-level security features.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">9) Your Controls and Choices</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>A) Account Information:</strong> You can review and update certain profile information in the app.</li>
                <li><strong>B) Location Controls:</strong> You can control location permissions at the device level. If you deny location access, features like ride matching, routing, and geofencing may not work.</li>
                <li><strong>C) Marketing Preferences:</strong> You can opt out of marketing emails via the unsubscribe link. Under the US CAN-SPAM rules, businesses must honor opt-out requests within 10 business days.</li>
                <li><strong>D) Push Notifications:</strong> You can disable push notifications in your device settings (some service notifications may be important for trips and safety).</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">10) Cookies, Analytics, and Advertising (Web + App)</h3>
              <p className="text-gray-700 mb-2">We may use cookies, SDKs, pixels, and similar tools to: keep you logged in; remember preferences; measure traffic and app performance; understand user journeys; support marketing and attribution.</p>
              <p className="text-gray-700 mb-2"><strong>Targeted Advertising and &quot;Sale/Share&quot; Concepts:</strong> Some state laws treat certain ad-tech disclosures as a &quot;sale&quot; or &quot;sharing&quot; of personal data for targeted advertising. If we engage in targeted advertising, you may have the right to opt out (see Section 12).</p>
              <p className="text-gray-700">
                <strong>Global Privacy Control / Universal Opt-Out Signals:</strong> Certain states require recognizing browser-based opt-out signals (like Global Privacy Control) for opt-outs of sale/targeted ads. Regulators have actively enforced compliance sweeps related to these signals.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">11) Children&apos;s Privacy</h3>
              <p className="text-gray-700">
                SafeRides is not directed to children under 13, and we do not knowingly collect personal information from children under 13. COPPA imposes requirements on services directed to children under 13 or that knowingly collect their data. If you believe a child under 13 has provided us information, contact us and we will take appropriate steps to delete it. (Separately: if SafeRides requires users to be 18+ or 21+ due to rideshare safety policies, that requirement should also be stated in your Terms.)
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">12) US State Privacy Rights Addendum</h3>
              <p className="text-gray-700 mb-2">US privacy laws vary by state and continue to evolve. Below is a practical, SafeRides-friendly rights section that covers major state privacy regimes.</p>
              <p className="text-gray-700 mb-2"><strong>How to exercise rights:</strong> Email saferideshelp@gmail.com with subject line &quot;Privacy Request&quot; and include: Your full name; Email/phone used for the account; State of residence; The request type (Access / Delete / Correct / Portability / Opt Out / Appeal). We may need to verify your identity before fulfilling a request (to protect you from fraud). If you use an authorized agent (where allowed), we may require proof of authorization and still verify you directly.</p>
              <div className="space-y-2 text-gray-700">
                <p><strong>A) California (CCPA/CPRA):</strong> California&apos;s CPRA amendments are in effect as of January 1, 2023. California requires businesses to respond to certain verified requests within 45 days (with a possible extension). California rights may include: Right to know/access; Right to delete; Right to correct; Right to opt out of &quot;sale&quot; and/or &quot;sharing&quot;; Right to limit use of sensitive personal information; Right to non-discrimination. &quot;Do Not Sell or Share&quot;: If we engage in activities covered by &quot;sale&quot; or &quot;sharing&quot; definitions, you can opt out through the methods above. We also aim to honor eligible opt-out preference signals where required.</p>
                <p><strong>B) Virginia (VCDPA), C) Colorado (CPA), D) Connecticut (CTDPA), E) Utah (UCPA), F) Texas (TDPSA), G) Oregon (OCPA), H) Montana (MTCDPA), I) Tennessee (TIPA), J) Iowa (ICDPA), K) Delaware (DPDPA), L) New Jersey (NJDPA), M) New Hampshire (NHDPA), N) Florida (Digital Bill of Rights), O) Indiana (INCDPA), P) Kentucky (KCDPA), Q) Rhode Island (RIDTPPA):</strong> These states have enacted privacy laws with varying effective dates. Rights generally include access, deletion, correction, portability, and opt-out of targeted advertising, sale, and certain profiling where applicable.</p>
              </div>
              <p className="text-gray-700 mt-2"><strong>Rights We Offer Where Applicable (Summary):</strong> Depending on your state, you may have the right to: Access; Delete; Correct; Portability; Opt out (targeted advertising, &quot;sale&quot;, certain profiling); Appeal. If we deny a request, we&apos;ll explain why and provide an appeal method when applicable.</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">13) &quot;Do Not Sell or Share&quot; and Targeted Advertising Opt-Out</h3>
              <p className="text-gray-700">
                If state law gives you the right to opt out of: targeted advertising; sale of personal data; sharing for cross-context behavioral advertising (California terminology)—you can submit an opt-out request via saferideshelp@gmail.com. We also aim to honor legally recognized opt-out preference signals (such as Global Privacy Control) where required.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">14) Changes to This Privacy Policy</h3>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. If we make material changes, we will provide notice through the app, our website, or by other means as required by law. The &quot;Last Updated&quot; date at the top indicates when this policy was most recently revised.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">15) Contact Us</h3>
              <p className="text-gray-700 mb-2">For questions, complaints, or privacy requests:</p>
              <ul className="space-y-1 text-gray-700">
                <li><strong>Email:</strong> saferideshelp@gmail.com</li>
                <li><strong>Mail:</strong> Coetzee Tech Inc. (SafeRides™), 214 S Gregg St, Apt A, Columbia, SC 29205, United States</li>
              </ul>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicy;
