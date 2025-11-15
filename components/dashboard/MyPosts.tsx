"use client";
import Link from "next/link";

import ArticleLayout from "@/components/ArticleLayout";
import MyPostPreview from "@/components/dashboard/MyPostPreview";
import MyPostsLayout from "@/components/dashboard/MyPostsLayout";
import SkeletonPostsList from "@/components/skeletons/SkeletonPostsList";

import useUserPosts from "@/hooks/useUserPosts";

function MyPosts() {
  // Get the posts from database
  const { data: posts, isLoading, error } = useUserPosts();

  // Show skeleton while data is being loaded
  if (isLoading) return <SkeletonPostsList />;

  // Guard clause - error
  if (error)
    return (
      <ArticleLayout>
        <h3 className="mb-2">Something went wrong</h3>
        <p>{error.message}</p>
      </ArticleLayout>
    );

  // Guard clause - no posts
  if (!posts?.length)
    return (
      <ArticleLayout>
        <h3 className="mb-2">No posts yet</h3>
        <p>
          Sorry! Looks like you do not have any posts yet.
          <br />
          Ready to start writing? Create your{" "}
          <Link href="/dashboard/add-post">first post</Link> right now!
        </p>
      </ArticleLayout>
    );

  // Returned JSX
  return (
    <MyPostsLayout>
      {posts.map((post) => {
        return <MyPostPreview key={post.id} post={post} />;
      })}
    </MyPostsLayout>
  );
}

export default MyPosts;
