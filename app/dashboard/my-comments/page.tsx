import { Metadata } from "next";

import SectionTitle from "@/components/SectionTitle";

// Metadata
export const metadata: Metadata = {
  title: "My Comments",
  description: "Track, review, and manage your comments across the platform",
};

function MyCommentsPage() {
  // Returned JSX
  return (
    <section>
      <SectionTitle>List of my comments</SectionTitle>
      <p>Under construction</p>
    </section>
  );
}

export default MyCommentsPage;
