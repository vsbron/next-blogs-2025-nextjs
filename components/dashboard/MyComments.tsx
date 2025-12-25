"use client";
import Link from "next/link";

import ArticleLayout from "@/components/ArticleLayout";
import MyCommentPreview from "@/components/dashboard/MyCommentPreview";
import MyContentLayout from "@/components/dashboard/MyContentLayout";
import SkeletonPostsList from "@/components/skeletons/SkeletonPostsList";

import useUserComments from "@/hooks/useUserComments";

function MyComments() {
  // Get the comments from database
  const { data: comments, isLoading, error } = useUserComments();

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

  // Guard clause - no comments
  if (!comments?.length)
    return (
      <ArticleLayout>
        <h3 className="mb-2">No comments yet</h3>
        <p>
          You have not written any comments so far.
          <br />
          Head over to the <Link href="/posts/">posts</Link> page and join the
          discussion.
        </p>
      </ArticleLayout>
    );

  // Returned JSX
  return (
    <MyContentLayout>
      {comments.map((comment) => (
        <MyCommentPreview key={comment.id} comment={comment} />
      ))}
    </MyContentLayout>
  );
}

export default MyComments;
