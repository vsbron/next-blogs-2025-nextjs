"use client";
import { useUser } from "@clerk/nextjs";

import SectionTitle from "@/components/SectionTitle";
import PostComment from "@/components/Comments/PostComment";
import SkeletonPostsGrid from "@/components/skeletons/SkeletonPostsGrid";

import useGetComments from "@/hooks/useGetComments";
import AddCommentForm from "./AddCommentForm";

// Props type
type PostCommentsProps = { postId: number };

// The component
function PostComments({ postId }: PostCommentsProps) {
  // Get the isSignedIn status of current user
  const { isSignedIn } = useUser();

  // Get the comments for posts
  const { comments, isLoading } = useGetComments(postId);

  // Guard clause
  if (isLoading) return <SkeletonPostsGrid />;
  if (!comments)
    return (
      <p>
        Sorry! There was an error while loading the comments.
        <br />
        Please try again...
      </p>
    );

  // Returned JSX
  return (
    <section className="mt-6">
      <SectionTitle as="h3">Comments</SectionTitle>

      {/* New comment form */}
      {isSignedIn && <AddCommentForm postId={postId} />}

      {/* Existing comments */}
      {comments.length > 0 ? (
        <div>
          {comments.map((comment) => (
            <PostComment key={comment.id} comment={comment} />
          ))}
        </div>
      ) : (
        <p>No comments yet for this post</p>
      )}
    </section>
  );
}

export default PostComments;
