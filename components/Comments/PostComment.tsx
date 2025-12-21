import { Comment } from "@/utils/types";

// Props type
type PostCommentProps = {
  comment: Comment;
};

// The component
function PostComment({ comment }: PostCommentProps) {
  // Returned JSX
  return <div>Comment</div>;
}

export default PostComment;
