import { Metadata } from "next";

import ArticleLayout from "@/components/ArticleLayout";
import SectionTitle from "@/components/SectionTitle";

// Meta data
export const metadata: Metadata = {
  title: "App Info",
  description:
    "Learn more about NextBlogs - the modern multi-user blogging platform built for writers and readers alike.",
};

// The page
function AppInfoPage() {
  // Returned JSX
  return (
    <ArticleLayout>
      <SectionTitle>App Info</SectionTitle>
    </ArticleLayout>
  );
}

export default AppInfoPage;
