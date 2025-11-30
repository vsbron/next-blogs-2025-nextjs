"use client";
import { Suspense } from "react";

import SectionTitle from "@/components/SectionTitle";
import AllPosts from "@/components/PostLists/AllPosts";
import SkeletonPostsGrid from "@/components/skeletons/SkeletonPostsGrid";
import { useSearchParams } from "next/navigation";

function AllPostsPageContent() {
  // Getting the state from URL
  const searchParams = useSearchParams();

  // Getting the current page number
  const cat = searchParams.get("category");

  // Returned JSX
  return (
    <section>
      <SectionTitle>All Posts{cat ? ` in ${cat}` : ""}</SectionTitle>
      <Suspense fallback={<SkeletonPostsGrid />}>
        <AllPosts searchParams={searchParams} />
      </Suspense>
    </section>
  );
}

export default AllPostsPageContent;
