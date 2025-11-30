"use client";
import { useSearchParams } from "next/navigation";

import SectionTitle from "@/components/SectionTitle";
import AllPosts from "@/components/PostLists/AllPosts";

function AllPostsPageContent() {
  // Getting the state from URL
  const searchParams = useSearchParams();

  // Getting the current page number
  const cat = searchParams.get("category");

  // Returned JSX
  return (
    <section>
      <SectionTitle>All Posts{cat ? ` in ${cat}` : ""}</SectionTitle>
      <AllPosts searchParams={searchParams} />
    </section>
  );
}

export default AllPostsPageContent;
