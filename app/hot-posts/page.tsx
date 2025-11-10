import { Metadata } from "next";

import SectionTitle from "@/components/SectionTitle";

// Meta data
export const metadata: Metadata = {
  title: "Trending Posts",
  description:
    "Explore the hottest posts on NextBlogs - trending stories and popular reads shared by our community.",
};

function HotPostsPage() {
  // Returned JSX
  return (
    <section>
      <SectionTitle>Trending Posts</SectionTitle>
    </section>
  );
}

export default HotPostsPage;
