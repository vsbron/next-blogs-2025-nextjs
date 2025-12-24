import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import Link from "next/link";

import CommentButtons from "@/components/Comments/CommentButtons";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { formatDate } from "@/utils/helpers";
import { CommentPreview } from "@/utils/types";

// Props type
type MyCommentPreviewProps = {
  comment: CommentPreview;
  activeAction: {
    commentId: number;
    type: "edit" | "delete";
  } | null;
  setActiveAction: Dispatch<
    SetStateAction<{
      commentId: number;
      type: "edit" | "delete";
    } | null>
  >;
};

// The component
function MyCommentPreview({
  comment,
  activeAction,
  setActiveAction,
}: MyCommentPreviewProps) {
  // Destructure props and configure date
  const { id, post, postId, commentText, commentedTime } = comment;
  const { title, imageUrl, author, authorId } = post;
  const date = formatDate(commentedTime);

  // Returned JSX
  return (
    <Card className="pt-0 pb-2 gap-0">
      <CardHeader className="pl-0 pr-4 !pb-0 border-b grid-rows-1">
        <div className="grid grid-cols-[max-content_1fr] gap-3 items-center">
          <div className="relative w-20 h-20 xs:w-24 xs:h-24 lg:w-18 lg:h-18">
            <Image
              src={imageUrl}
              fill
              className="object-cover rounded-tl-xl"
              alt={title}
            />
          </div>
          <div className="flex flex-col max-xs:gap-0.5">
            <Link
              href={`/posts/${postId}`}
              className="link-primary text-base xs:text-lg leading-tight"
            >
              {title}
            </Link>
            <div className="max-xs:text-sm">
              <span className="max-xs:hidden">Published </span>by{" "}
              <Link href={`/authors/${authorId}`} className="link-primary">
                {author.displayName}
              </Link>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-2 px-4 grid grid-cols-[1fr_100px] xs:grid-cols-1 md:grid-cols-[1fr_max-content] justify-between gap-4">
        <div className="xs:text-lg">{commentText}</div>
        <div className="flex flex-col gap-0.5 items-end">
          <div className="text-xs xs:text-sm text-foreground/40 xs:font-bold text-right max-xs:mb-1">
            <span className="max-xs:hidden">Left on </span>
            {date}
          </div>
          <CommentButtons
            id={id}
            postId={postId}
            text={commentText}
            activeAction={activeAction}
            setActiveAction={setActiveAction}
          />
        </div>
      </CardContent>
    </Card>
  );
}

export default MyCommentPreview;
