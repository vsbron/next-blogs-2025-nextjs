"use client";
import SectionTitle from "@/components/SectionTitle";
import SkeletonPostsGrid from "@/components/skeletons/SkeletonPostsGrid";
import useGetComments from "@/hooks/useGetComments";
import PostComment from "./PostComment";

// Props type
type PostCommentsProps = { postId: number };

// The component
function PostComments({ postId }: PostCommentsProps) {
  // Get the comments for posts
  const { comments, isLoading } = useGetComments(postId);

  // Guard clause
  if (isLoading) return <SkeletonPostsGrid />;
  if (!comments) return <p>Error</p>;

  // Returned JSX
  return (
    <section className="mt-6">
      <SectionTitle as="h3">Comments</SectionTitle>
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
