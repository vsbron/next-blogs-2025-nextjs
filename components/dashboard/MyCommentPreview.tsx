import Image from "next/image";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { formatDate } from "@/utils/helpers";
import { CommentPreview } from "@/utils/types";

function MyCommentPreview({ comment }: { comment: CommentPreview }) {
  // Destructure props and configure date
  const { id, post, postId, commentText, commentedTime } = comment;
  const { title, imageUrl, author, authorId } = post;
  const date = formatDate(commentedTime);

  // Returned JSX
  return (
    <Card className="p-0 gap-0 grid grid-cols-[1fr_min-content] md:grid-cols-[120px_1fr_min-content]">
      <CardHeader>Test</CardHeader>
      <CardContent>Test 2</CardContent>
    </Card>
  );
}

export default MyCommentPreview;
