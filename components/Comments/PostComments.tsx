"use client";
import { useUser } from "@clerk/nextjs";

import SectionTitle from "@/components/SectionTitle";
import AddCommentForm from "@/components/Comments/AddCommentForm";
import AuthToComment from "@/components/Comments/AuthToComment";
import PostComment from "@/components/Comments/PostComment";
import SkeletonPostsGrid from "@/components/skeletons/SkeletonPostsGrid";

import useGetComments from "@/hooks/useGetComments";

// Props type
type PostCommentsProps = { postId: number };

// The component
function PostComments({ postId }: PostCommentsProps) {
  // Get the isSignedIn status of current user and user object
  const { isSignedIn, user } = useUser();

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
      <SectionTitle as="h3">Comments ({comments.length})</SectionTitle>

      {/* New comment form */}
      {isSignedIn ? <AddCommentForm postId={postId} /> : <AuthToComment />}

      {/* Existing comments */}
      {comments.length > 0 ? (
        <div className="flex flex-col gap-4 max-md:mb-20">
          {comments.map((comment) => (
            <PostComment
              key={comment.id}
              comment={comment}
              currentUserId={user?.id}
            />
          ))}
        </div>
      ) : (
        <p>No comments yet for this post</p>
      )}
    </section>
  );
}

export default PostComments;
