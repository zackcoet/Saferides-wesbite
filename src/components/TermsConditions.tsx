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

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <p className="text-yellow-800 text-sm">
                PLEASE READ THESE TERMS OF SERVICE CAREFULLY AS THEY CONTAIN PROVISIONS THAT GOVERN HOW YOU CAN BRING CLAIMS BETWEEN YOU AND SAFERIDES™, INCLUDING THE ARBITRATION AGREEMENT IN SECTION 2 BELOW. THE ARBITRATION AGREEMENT REQUIRES YOU TO RESOLVE ALL DISPUTES WITH SAFERIDES™ ON AN INDIVIDUAL BASIS AND, WITH LIMITED EXCEPTIONS, THROUGH FINAL AND BINDING ARBITRATION.
              </p>
            </div>

            <section>
              <p className="text-gray-700 leading-relaxed mb-6">
                These Terms of Service ("Terms of Service") constitute a legally binding agreement between you and SafeRides™ Technologies, Inc. and its subsidiaries, representatives, affiliates, officers and directors (collectively, "SafeRides™") governing your use of SafeRides™' personalized, multipurpose, digital marketplace platform ("SafeRides™ Marketplace Platform") and any related content or services, including but not limited to mobile and/or web-based applications ("Applications" or the "SafeRides™ App," and together with the SafeRides™ Marketplace Platform, the "Services").
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Contractual Relationship; Termination; and Modification</h3>
              <p className="text-gray-700 mb-3">
                In addition to these Terms of Service, your access to, and use of the Services is also governed by the applicable terms found on our website. These include but are not limited to: the Privacy Notice, which describes how we collect, use, and disclose your personal information; the User Generated Content Terms; Community Guidelines; Referral Policies; and SafeRides™' other applicable SafeRides™ standards and policies.
              </p>
              <p className="text-gray-700 mb-3">
                By accessing or using the Services, you confirm your agreement to be bound by these Terms. If you do not agree to these Terms, do not access or use the Services.
              </p>
              
              <h4 className="font-semibold text-gray-800 mb-2">Termination</h4>
              <p className="text-gray-700 mb-3">
                SafeRides™, in its sole discretion, may immediately terminate these Terms or any Services with respect to you, or generally cease offering or deny access to the Services or any portion thereof, at any time for any reason.
              </p>

              <h4 className="font-semibold text-gray-800 mb-2">Modification</h4>
              <p className="text-gray-700">
                SafeRides™ reserves the right to modify these Terms or its policies relating to the Services at any time, effective upon posting of an updated version of these Terms through the Services or SafeRides™' website. You should regularly review these Terms, as your continued use of the Services after any such changes constitutes your agreement to such changes.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Arbitration Agreement</h3>
              <p className="text-gray-700 mb-3">
                By agreeing to these Terms, you agree that you are required to resolve any claim that you may have against SafeRides™ on an individual basis in binding arbitration as set forth in this Arbitration Agreement, and not as a class, collective, coordinated, consolidated, mass and/or representative action.
              </p>
              
              <h4 className="font-semibold text-gray-800 mb-2">Agreement to Binding Arbitration Between You and SafeRides™</h4>
              <h5 className="font-medium text-gray-800 mb-2">Covered Disputes:</h5>
              <p className="text-gray-700 mb-3">
                Except as expressly provided below, you and SafeRides™ agree that any dispute, claim, or controversy in any way arising out of or relating to (i) these Terms and prior versions of these Terms, or the existence, breach, termination, enforcement, interpretation, scope, waiver, or validity thereof; (ii) your access to or use of the Services at any time; (iii) incidents or accidents resulting in personal injury or death that you allege occurred in connection with your use of the Services; and (iv) your relationship with SafeRides™, will be settled by binding individual arbitration between you and SafeRides™, and not in a court of law.
              </p>

              <h5 className="font-medium text-gray-800 mb-2">Class Action Waiver:</h5>
              <p className="text-gray-700 mb-3">
                Any and all disputes, claims, or controversies between the parties shall be resolved only in individual arbitration. The parties expressly waive the right to have any dispute, claim, or controversy brought, heard, administered, resolved, or arbitrated as a class, collective, coordinated, consolidated, and/or representative action.
              </p>

              <h5 className="font-medium text-gray-800 mb-2">Mass Actions:</h5>
              <p className="text-gray-700 mb-3">
                The parties expressly waive the right to have any dispute, claim, or controversy brought, heard, administered, resolved, or arbitrated as a mass action, and neither an arbitrator nor an arbitration provider shall have any authority to hear, arbitrate, or administer any mass action.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">3. The Services</h3>
              <p className="text-gray-700 mb-3">
                The Services enable you and other consumers to find, request, or receive Third-Party Services from third party service providers, including without limitation, independent drivers, and related personalized content, including features, recommendations and advertisements for products or services tailored to your needs and interests.
              </p>
              <p className="text-gray-700 mb-3 font-semibold uppercase">
                SAFERIDES™ IS NOT A COMMON OR MOTOR CARRIER AND DOES NOT TRANSPORT PASSENGERS OR GOODS. THIRD-PARTY PROVIDERS ARE INDEPENDENT AND NOT ACTUAL AGENTS, APPARENT AGENTS, OSTENSIBLE AGENTS, OR EMPLOYEES OF SAFERIDES™ IN ANY WAY.
              </p>

              <h4 className="font-semibold text-gray-800 mb-2">App Stores</h4>
              <p className="text-gray-700 mb-3">
                The availability of the Services may be dependent on the third-party from which you received the license to the SafeRides™ App, e.g., the Apple iPhone or Android app stores. These Terms are between you and SafeRides™ and not with the App Store and SafeRides™ is responsible for the provision of Services as described in these Terms.
              </p>

              <h4 className="font-semibold text-gray-800 mb-2">Ownership; License; and Restrictions</h4>
              <p className="text-gray-700 mb-3">
                The Services and all rights, title, and interest, including all related intellectual property rights therein, are and shall remain SafeRides™'s property or the property of SafeRides™'s licensors. These Terms are not a sale and do not convey or grant to you any rights in or related to the Services.
              </p>
              <p className="text-gray-700">
                Subject to your compliance with these Terms, SafeRides™ grants you a limited, non-exclusive, non-sublicensable, revocable, non-transferable license to: (i) access and use the SafeRides™ App solely in connection with your use of the Services on your personal device; and (ii) access and use any content, information and related materials that may be made available through the Services, in each case solely for your personal, noncommercial use.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">4. Third-Party Services and Content</h3>
              <p className="text-gray-700 mb-3">
                While many Third-Party Services are available in the SafeRides™ App, certain Third-Party Services or content are only accessible by exiting the SafeRides™ App ("Out-of-App Experiences"). Once you click on a link to access Out-of-App Experiences, you will be subject to the terms and conditions and privacy policy of that website, destination, or Out-of-App Experience provider.
              </p>
              <p className="text-gray-700">
                Third-Party Services may be subject to additional terms, conditions, fees, and policies imposed by the Third-Party Provider. In the event of a conflict in the terms of any Third-Party Services and these Terms, these Terms shall control with respect to SafeRides™ and your agreements with SafeRides™ herein.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">5. Accessing the Services</h3>
              <h4 className="font-semibold text-gray-800 mb-2">User Accounts</h4>
              <p className="text-gray-700 mb-3">
                In order to use most aspects of the Services, you must register for and maintain an active personal user Services account ("Account"). Unless a specific Service provides otherwise: (i) you must be at least 17 years of age, or the age of legal majority in your jurisdiction (if different than 17), to obtain an Account, (ii) you may only possess one Account and (iii) you may not assign or otherwise transfer your Account to any other person or entity.
              </p>
              <p className="text-gray-700 mb-3">
                You are responsible for all activity that occurs under your Account, and you agree to maintain the security and secrecy of your Account credentials at all times. You cannot register for or maintain an Account if you have previously been banned from accessing or using the Services.
              </p>
              <p className="text-gray-700">
                Account registration may require you to submit to SafeRides™ certain personal information, such as your name, address, still or live photo, mobile phone number and age, as well as at least one valid payment method. You are responsible for providing accurate Account Information and in certain instances, you may be asked to provide proof of age, identity or other method of identity verification to access or use the Services.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">6. User Conduct and Requirements</h3>
              <p className="text-gray-700 mb-2">You agree that you will:</p>
              <ul className="space-y-1 text-gray-700 mb-3 ml-4">
                <li>• Only create one account and provide accurate information</li>
                <li>• Be enrolled as a student at a participating university</li>
                <li>• Comply with all applicable laws and regulations</li>
                <li>• Treat all users with respect and courtesy</li>
                <li>• Not use the Services for illegal or unauthorized purposes</li>
                <li>• Not use the Services for commercial purposes without authorization</li>
                <li>• Not interfere with or disrupt the Services or servers</li>
                <li>• Not attempt to gain unauthorized access to the Services</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">7. Payment</h3>
              <p className="text-gray-700 mb-3">
                SafeRides™ may charge a service fee for use of the Services. All fees are non-refundable unless expressly stated otherwise. You are responsible for all charges incurred under your Account.
              </p>

              <h4 className="font-semibold text-gray-800 mb-2">Refunds</h4>
              <p className="text-gray-700 mb-3">
                Refunds may be issued at SafeRides™'s discretion and are subject to these Terms and applicable refund policies.
              </p>

              <h4 className="font-semibold text-gray-800 mb-2">Promotional Offers</h4>
              <p className="text-gray-700 mb-3">
                SafeRides™ may provide promotional offers and discounts that may be subject to additional terms and conditions.
              </p>

              <h4 className="font-semibold text-gray-800 mb-2">Gratuity</h4>
              <p className="text-gray-700">
                Gratuities are voluntary and may be added through the Services. Any gratuity will be paid to the Third-Party Provider and is separate from any fees charged by SafeRides™.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">8. Disclaimers; Limitation of Liability; and Indemnity</h3>
              <p className="text-gray-700 mb-3 font-semibold uppercase">
                THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE." SAFERIDES™ DISCLAIMS ALL REPRESENTATIONS AND WARRANTIES, EXPRESS, IMPLIED, OR STATUTORY, NOT EXPRESSLY SET OUT IN THESE TERMS OF SERVICE, INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p className="text-gray-700 mb-3 font-semibold uppercase">
                SAFERIDES™ SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, PUNITIVE, OR CONSEQUENTIAL DAMAGES, INCLUDING LOST PROFITS, LOST DATA, PERSONAL INJURY, OR PROPERTY DAMAGE, RELATED TO, IN CONNECTION WITH, OR OTHERWISE RESULTING FROM ANY USE OF THE SERVICES.
              </p>
              <p className="text-gray-700">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE AGGREGATE LIABILITY OF SAFERIDES™ ARISING OUT OF OR IN CONNECTION WITH THESE TERMS AND YOUR USE OF THE SERVICES SHALL NOT EXCEED THE GREATER OF: (A) ONE HUNDRED DOLLARS ($100); AND (B) THE TOTAL AMOUNT PAID BY YOU TO SAFERIDES™ FOR THE USE OF SERVICES DURING THE PERIOD OF THREE (3) MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO YOUR CLAIM.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">9. Other Provisions</h3>
              <p className="text-gray-700 mb-3">
                These Terms shall be governed by and construed in accordance with the laws of the State of South Carolina, without regard to conflict of law principles.
              </p>
              <p className="text-gray-700 mb-3">
                If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
              </p>
              <p className="text-gray-700">
                These Terms constitute the entire agreement between you and SafeRides™ regarding the Services and supersede all prior and contemporaneous agreements and understandings.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">10. Contact Information</h3>
              <p className="text-gray-700">
                Questions about these Terms of Service should be sent to us at{" "}
                <a href="mailto:saferideshelp@gmail.com" className="text-primary hover:underline">
                  saferideshelp@gmail.com
                </a>{" "}
                or SafeRides™ Technologies, Inc., 600 Heyward St, Columbia, SC 29201, USA.
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default TermsConditions;