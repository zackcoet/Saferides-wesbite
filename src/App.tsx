import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import StoryPage from "./pages/StoryPage";
import NotFound from "./pages/NotFound";

// Privacy, Terms, and Apply import the Firebase SDK, which initializes at
// module load. Lazy-load them so Firebase is never pulled into the main bundle
// and the landing page renders even when Firebase env vars are absent.
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Apply = lazy(() => import("./pages/Apply"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="min-h-screen bg-white" />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
