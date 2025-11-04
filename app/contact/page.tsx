import { Metadata } from "next";

import ArticleLayout from "@/components/ArticleLayout";
import SectionTitle from "@/components/SectionTitle";

// Meta data
export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the NextBlogs team for questions, feedback, or collaboration opportunities.",
  robots: {
    index: false,
    follow: false,
  },
};

// The page
function ContactPage() {
  // Returned JSX
  return (
    <section>
      <SectionTitle>Contact Us</SectionTitle>
      <ArticleLayout>
        <div></div>
      </ArticleLayout>
    </section>
  );
}

export default ContactPage;
