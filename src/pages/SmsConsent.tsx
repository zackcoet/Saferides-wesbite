import { useEffect } from "react";

const ROYAL_BLUE = "#1740A6";

function ScreenshotCard({
  label,
  src,
  alt,
}: {
  label: string;
  src: string;
  alt: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-lg font-semibold mb-3" style={{ color: ROYAL_BLUE }}>
        {label}
      </h2>
      <div
        className="rounded-lg overflow-hidden border"
        style={{ borderColor: ROYAL_BLUE }}
      >
        <img src={src} alt={alt} className="block max-w-full h-auto" />
      </div>
    </div>
  );
}

export default function SmsConsent() {
  useEffect(() => {
    document.title = "SMS Consent Screenshots - SafeRides";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-8 text-center">
          <h1 className="text-2xl font-bold" style={{ color: ROYAL_BLUE }}>
            SMS Consent Screenshots
          </h1>
          <p className="text-sm text-gray-600 mt-3 max-w-2xl mx-auto">
            The following screenshots show the SMS consent disclosure
            presented to users during signup in the SafeRides Rider and
            Driver apps.
          </p>
        </header>

        <div className="grid gap-10 sm:grid-cols-2 justify-items-center">
          <ScreenshotCard
            label="Rider App"
            src="/images/sms-consent-rider-placeholder.png"
            alt="SMS consent disclosure shown during signup in the SafeRides Rider app"
          />
          <ScreenshotCard
            label="Driver App"
            src="/images/sms-consent-driver-placeholder.png"
            alt="SMS consent disclosure shown during signup in the SafeRides Driver app"
          />
        </div>
      </div>
    </div>
  );
}
