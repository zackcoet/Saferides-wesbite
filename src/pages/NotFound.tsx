import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function NotFound() {
  const location = useLocation();

  useEffect(() => {
    console.error("404:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="text-center">
        <p className="text-8xl font-bold text-[#1740A6]">404</p>
        <p className="mt-4 text-lg text-[#1740A6]/60">Page not found</p>
        <a
          href="/"
          className="mt-8 inline-block rounded-full bg-[#1740A6] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1740A6]/90 transition-colors"
        >
          Back to home
        </a>
      </div>
    </div>
  );
}
