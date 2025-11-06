import { Metadata } from "next";
import { Suspense } from "react";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

import SectionTitle from "@/components/SectionTitle";
import AddEditPostForm from "@/components/dashboard/AddEditPostForm";
import SkeletonPostsGrid from "@/components/skeletons/SkeletonPostsGrid";
import { fetchPost } from "@/utils/actions/posts";

// Interface for the Post ID
interface SinglePostPageProps {
  params: Promise<{ id: string }>;
}

// Metadata
export const metadata: Metadata = {
  title: "Edit Post",
  description: "Update your existing post on NextBlogs.",
};

// The page
async function EditPostPage({ params }: SinglePostPageProps) {
  // Get the ID from the params and fetch the post
  const { id } = await params;
  const { userId } = await auth();
  const post = await fetchPost(id);

  // Guard clauses
  if (!post) throw new Error("Post not found");
  if (post.authorId !== userId) redirect("/dashboard/my-posts/");

  // Returned JSX
  return (
    <section>
      <SectionTitle>Edit published post</SectionTitle>
      <Suspense fallback={<SkeletonPostsGrid />}>
        <AddEditPostForm defaultValues={post} />
      </Suspense>
    </section>
  );
}

export default EditPostPage;
