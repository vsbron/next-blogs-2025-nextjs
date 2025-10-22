import { Metadata } from "next";

import ArticleLayout from "@/components/ArticleLayout";
import SectionTitle from "@/components/SectionTitle";

// Meta data
export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover the story behind NextBlogs, our mission, and the vision driving our modern blogging platform.",
};

// The page
function AboutPage() {
  // Returned JSX
  return (
    <ArticleLayout>
      <SectionTitle>About Us</SectionTitle>
    </ArticleLayout>
  );
}

export default AboutPage;
