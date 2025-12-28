import { Metadata } from "next";

import CategoriesPageList from "@/components/CategoriesPageList";
import SectionTitle from "@/components/SectionTitle";

import { SITE_DOMAIN } from "@/utils/constants";

// Meta data
export const metadata: Metadata = {
  title: "Explore Categories",
  description:
    "Browse posts by category and dive into topics that match your interests - from technology to creativity.",
  alternates: {
    canonical: `${SITE_DOMAIN}/categories`,
  },
};

function CategoriesPage() {
  // Returned JSX
  return (
    <section>
      <SectionTitle>Explore Categories</SectionTitle>
      <CategoriesPageList />
    </section>
  );
}

export default CategoriesPage;
