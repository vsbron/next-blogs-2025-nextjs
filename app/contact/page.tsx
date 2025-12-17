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
        <p>
          We would love to hear from you. Whether you have feedback, questions,
          ideas, or just want to share your thoughts about the project - feel
          free to reach out.
        </p>
        <p>
          Next Blogs is a fully functional platform, and input from real users
          helps shape future improvements, refinements, and experiments.
        </p>
        <p>
          Use the contact form below to get in touch, and we will respond as
          soon as possible.
        </p>
        <p>
          Thanks for your time, interest, and support - it is genuinely
          appreciated.
        </p>
      </ArticleLayout>
    </section>
  );
}

export default ContactPage;
