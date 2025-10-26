import { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";

// Metadata
export const metadata: Metadata = {
  title: "Profile Statistics",
  description:
    "Analyze your engagement, post performance, and interactions on NextBlogs.",
};

// The page
function ProfileStatsPage() {
  // Returned JSX
  return (
    <section>
      <SectionTitle>Profile statistics</SectionTitle>
    </section>
  );
}

export default ProfileStatsPage;
