import { Metadata } from "next";

import SectionTitle from "@/components/SectionTitle";

// Meta data
export const metadata: Metadata = {
  title: "Explore Categories",
  description:
    "Browse posts by category and dive into topics that match your interests - from technology to creativity.",
};

function CategoriesPage() {
  // Returned JSX
  return (
    <section>
      <SectionTitle>Explore Categories</SectionTitle>
    </section>
  );
}

export default CategoriesPage;
