import { formatDateTime } from "@/utils/helpers";
import { Comment } from "@/utils/types";
import { Card, CardContent, CardHeader } from "../ui/card";

// Props type
type PostCommentProps = {
  comment: Comment;
};

// The component
function PostComment({ comment }: PostCommentProps) {
  // Destructure comment
  const { commentText, commentedTime, user } = comment;
  const { username, displayName, imageUrl } = user;

  // Returned JSX
  return (
    <Card className="shadow-none py-2 gap-2 max-w-[800px]">
      <CardHeader className="px-4 !pb-1 border-b border-border flex justify-between">
        <div>
          <div>{username}</div>
        </div>
        <div>{formatDateTime(commentedTime)}</div>
      </CardHeader>
      <CardContent className="px-4 !py-1">
        <div>{commentText}</div>
      </CardContent>
    </Card>
  );
}

export default PostComment;
