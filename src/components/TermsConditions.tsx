import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const TermsConditions = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="h-auto p-0 text-sm text-gray-600 hover:text-royal-blue">
          Terms & Conditions
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Terms & Conditions
          </DialogTitle>
          <p className="text-sm text-gray-600 mt-2">SafeRides™ Terms of Service</p>
        </DialogHeader>
        <ScrollArea className="px-6 pb-6 max-h-[60vh]">
          <div className="space-y-6 text-sm leading-relaxed">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-800 font-semibold text-sm">
                IMPORTANT: PLEASE BE ADVISED THAT BY AGREEING TO THESE TERMS YOU ARE WAIVING YOUR RIGHT TO SEEK RELIEF IN A COURT OF LAW AND WAIVING YOUR RIGHT TO HAVE A JURY TRIAL ON YOUR CLAIMS.
              </p>
            </div>

            <section>
              <p className="text-gray-700 leading-relaxed">
                These Terms of Service ("Terms of Service") constitute a legally binding agreement between you and SafeRides™ Technologies, Inc. and its subsidiaries, representatives, affiliates, officers and directors (collectively, "SafeRides™") governing your use of SafeRides™' personalized, multipurpose, digital marketplace platform ("SafeRides™ Marketplace Platform") and any related content or services, including but not limited to mobile and/or web-based applications ("Applications" or the "SafeRides™ App," and together with the SafeRides™ Marketplace Platform, the "Services").
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Contractual Relationship; Termination; and Modification</h3>
              <p className="text-gray-700 mb-3">
                These Terms of Service constitute the entire agreement between you and SafeRides™ relating to your use of the Services, and supersede any prior agreements between you and SafeRides™ relating to the Services.
              </p>
              
              <h4 className="font-semibold text-gray-800 mb-2">Termination</h4>
              <p className="text-gray-700 mb-3">
                You may terminate these Terms of Service at any time by ceasing your use of the Services and deleting your account. SafeRides™ may terminate these Terms of Service and your access to the Services at any time, for any reason, and without warning or prior notice.
              </p>

              <h4 className="font-semibold text-gray-800 mb-2">Modification</h4>
              <p className="text-gray-700">
                SafeRides™ reserves the right to modify these Terms of Service at any time. Any modifications will be effective immediately upon posting of the revised Terms of Service.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Arbitration Agreement</h3>
              
              <h4 className="font-semibold text-gray-800 mb-2">Agreement to Binding Arbitration</h4>
              <p className="text-gray-700 mb-3">
                You and SafeRides™ mutually agree that any dispute, claim or controversy arising out of or relating to these Terms of Service or the breach, termination, enforcement, interpretation or validity thereof, or to the use of the Services (collectively, "Disputes") will be resolved solely by binding arbitration.
              </p>

              <h4 className="font-semibold text-gray-800 mb-2">Class Action Waiver</h4>
              <p className="text-gray-700 mb-3">
                You and SafeRides™ agree that any arbitration shall be limited to the Dispute between SafeRides™ and you individually. You acknowledge and agree that you and SafeRides™ are each waiving the right to a trial by jury or to participate in a class action.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">3. The Services</h3>
              <p className="text-gray-700 mb-3">
                SafeRides™ provides a digital marketplace platform that connects university students who need transportation ("Riders") with other university students who are willing to provide transportation ("Drivers").
              </p>

              <h4 className="font-semibold text-gray-800 mb-2">Ownership; License; and Restrictions</h4>
              <p className="text-gray-700">
                The Services and all rights therein are and shall remain SafeRides™' property or the property of SafeRides™' licensors. SafeRides™ grants you a limited, non-exclusive, non-sublicensable, revocable, non-transferrable license to use the Services.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">4. User Conduct and Requirements</h3>
              <p className="text-gray-700 mb-2">You agree that you will:</p>
              <ul className="space-y-1 text-gray-700 mb-3">
                <li>• Only create one account and provide accurate information</li>
                <li>• Be enrolled as a student at a participating university</li>
                <li>• Comply with all applicable laws and regulations</li>
                <li>• Treat all users with respect and courtesy</li>
                <li>• Not use the Services for illegal or unauthorized purposes</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">5. Payment</h3>
              <p className="text-gray-700 mb-3">
                SafeRides™ may charge a service fee for use of the Services. All fees are non-refundable unless expressly stated otherwise.
              </p>

              <h4 className="font-semibold text-gray-800 mb-2">Promotional Offers</h4>
              <p className="text-gray-700">
                SafeRides™ may provide promotional offers and discounts that may be subject to additional terms and conditions.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">6. Disclaimers and Limitation of Liability</h3>
              <p className="text-gray-700 mb-3">
                THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE." SAFERIDES™ DISCLAIMS ALL REPRESENTATIONS AND WARRANTIES, EXPRESS, IMPLIED, OR STATUTORY, NOT EXPRESSLY SET OUT IN THESE TERMS OF SERVICE.
              </p>
              <p className="text-gray-700">
                SAFERIDES™ SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, PUNITIVE, OR CONSEQUENTIAL DAMAGES, INCLUDING LOST PROFITS, LOST DATA, PERSONAL INJURY, OR PROPERTY DAMAGE.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">7. Contact Information</h3>
              <p className="text-gray-700">
                Questions about these Terms of Service should be sent to us at saferideshelp@gmail.com or 
                600 Heyward St, Columbia, SC 29201, USA.
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default TermsConditions;