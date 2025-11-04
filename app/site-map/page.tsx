import { Metadata } from "next";

import ArticleLayout from "@/components/ArticleLayout";
import SectionTitle from "@/components/SectionTitle";

// Meta data
export const metadata: Metadata = {
  title: "Sitemap",
  description:
    "Explore the full map of NextBlogs - easily navigate through articles, authors, categories, and more.",
};

// The page
function SitemapPage() {
  // Returned JSX
  return (
    <section>
      <SectionTitle>Sitemap</SectionTitle>
      <ArticleLayout>
        <div></div>
      </ArticleLayout>
    </section>
  );
}

export default SitemapPage;
