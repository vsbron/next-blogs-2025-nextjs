import { Metadata } from "next";

import SectionTitle from "@/components/SectionTitle";
import MyComments from "@/components/dashboard/MyComments";

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
      <MyComments />
    </section>
  );
}

export default MyCommentsPage;
