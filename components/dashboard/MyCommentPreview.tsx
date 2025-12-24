import Image from "next/image";
import Link from "next/link";

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
    <Card className="pt-0 pb-3 gap-0">
      <CardHeader className="pl-0 pr-4 !pb-0 border-b grid-rows-1">
        <div className="flex gap-3 items-center">
          <div className="relative w-18 h-18">
            <Image
              src={imageUrl}
              fill
              className="object-cover rounded-tl-xl"
              alt={title}
            />
          </div>
          <div className="flex flex-col">
            <Link href={`/posts/${postId}`} className="link-primary text-lg">
              {title}
            </Link>
            <div>
              Published by{" "}
              <Link href={`/authors/${authorId}`} className="link-primary">
                {author.displayName}
              </Link>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-3 px-4">
        <div className="text-sm text-foreground/40 font-bold">
          Left on {date}
        </div>
        <div className="text-lg">{commentText}</div>
      </CardContent>
    </Card>
  );
}

export default MyCommentPreview;
