import { Metadata } from "next";

import CTASection from "@/components/CTASection";
import NotFoundSection from "@/components/NotFoundSection";
import GeneralStats from "@/components/GeneralStats";

// Meta data
export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "Sorry, the page you're looking for doesn't exist or has been moved. Return to the homepage to keep exploring NextBlogs",
  robots: {
    index: false,
    follow: false,
  },
};

// The page
function NotFoundPage() {
  // Returned JSX
  return (
    <>
      <NotFoundSection />
      <CTASection />
      <GeneralStats />
    </>
  );
}

export default NotFoundPage;
