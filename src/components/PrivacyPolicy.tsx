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
            Privacy Policy
          </DialogTitle>
          <p className="text-sm text-gray-600 mt-2">Last updated: August 12, 2025</p>
        </DialogHeader>
        <ScrollArea className="px-6 pb-6 max-h-[60vh]">
          <div className="space-y-6 text-sm leading-relaxed">
            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Who we are</h3>
              <p className="text-gray-700 mb-2">
                SafeRides™ is operated by Coetzee Tech LLC ("SafeRides," "we," "us," "our").
              </p>
              <p className="text-gray-700">
                Contact: saferideshelp@gmail.com • 600 Heyward St, Columbia, SC 29201, USA
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Summary at a glance</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• We collect account details (e.g., name, school email), ride and location data, device info, and—if you're a driver—onboarding documents (e.g., insurance).</li>
                <li>• We use data to run the service, keep people safe, fight fraud, provide support, and comply with law.</li>
                <li>• We share limited info with drivers/riders for trips, with service providers (hosting, payments, analytics), and when required by law or safety.</li>
                <li>• You can access, correct, delete, or export your data, and opt out of certain processing where available.</li>
                <li>• We do not sell your personal information.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">1) Scope</h3>
              <p className="text-gray-700">
                This Policy applies to our website, apps, and related services (collectively, the "Services"). 
                It does not cover third-party services you access through links or integrations (e.g., payment processors).
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">2) Information we collect</h3>
              
              <h4 className="font-semibold text-gray-800 mb-2">A. You provide directly</h4>
              <ul className="space-y-1 text-gray-700 mb-4">
                <li>• Account & Profile: name, school email, password, phone number, profile photo, gender, major (optional), pickup verification code, campus affiliation</li>
                <li>• Communications & Support: messages to support, feedback, reports/ratings</li>
                <li>• Driver Onboarding (drivers only): insurance information and related documents</li>
              </ul>

              <h4 className="font-semibold text-gray-800 mb-2">B. Collected when you use the Services</h4>
              <ul className="space-y-1 text-gray-700 mb-4">
                <li>• Ride & Transaction Data: pick-up/drop-off locations and timestamps, trip routes, fares/prices</li>
                <li>• Location Data: precise or approximate location when the app is open or in active use</li>
                <li>• Device & Usage: device model, OS, app version, language, IP address, crash logs, diagnostics</li>
                <li>• Push Tokens: identifiers used to send notifications to your device</li>
              </ul>

              <h4 className="font-semibold text-gray-800 mb-2">C. From third parties</h4>
              <p className="text-gray-700">
                Payments: limited transaction details from payment processors (we do not store full card).
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">3) How we use information</h3>
              <ul className="space-y-1 text-gray-700">
                <li>• Provide the Services: account creation, identity and student verification, matching riders/drivers</li>
                <li>• Safety & Integrity: verify driver documents, prevent fraud, enforce Terms, investigate incidents</li>
                <li>• Customer Support: respond to requests, troubleshoot issues, and improve reliability</li>
                <li>• Analytics & Improvement: measure performance and quality; develop new features</li>
                <li>• Compliance & Legal: meet legal/recordkeeping obligations; address disputes</li>
                <li>• Communications: essential service messages; optional marketing (you can opt out)</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">4) When we share information</h3>
              <ul className="space-y-1 text-gray-700">
                <li>• Between riders and drivers: names, profile photos, ratings, and trip-necessary details</li>
                <li>• Service providers: hosting, storage, analytics, payment processing, communications</li>
                <li>• Legal & Safety: with law enforcement, regulators, or campus authorities when required by law</li>
                <li>• Business transfers: in connection with a merger, acquisition, or asset sale</li>
                <li>• We do not sell personal information</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">5) Your choices and rights</h3>
              <ul className="space-y-1 text-gray-700">
                <li>• Access, Correct, Delete, Portability: email us at saferideshelp@gmail.com</li>
                <li>• Marketing Opt-Out: use the unsubscribe link in emails or contact us</li>
                <li>• Location Services: manage in your device settings</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">6) Data retention and security</h3>
              <p className="text-gray-700 mb-2">
                We retain your data as long as necessary to provide Services, comply with legal obligations, 
                and resolve disputes. We use industry-standard security measures to protect your information.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">7) Contact us</h3>
              <p className="text-gray-700">
                For questions about this Privacy Policy, contact us at saferideshelp@gmail.com or 
                600 Heyward St, Columbia, SC 29201, USA.
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicy;