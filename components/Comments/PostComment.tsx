import { formatDateTime } from "@/utils/helpers";
import { Comment } from "@/utils/types";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import Link from "next/link";

import defaultAvatar from "@/assets/defaultUser.png";

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
    <Card className="shadow-none pt-1.5 pb-2 gap-2 max-w-[800px]">
      <CardHeader className="px-4 !pb-1 border-b border-border flex justify-between items-center text-foreground/50 font-bold text-sm">
        <Link
          href={`/authors/${username}`}
          className="flex items-center gap-2 decoration-0 before:hidden"
        >
          <div className="relative w-7 h-7 rounded-full overflow-hidden">
            <Image
              src={imageUrl || defaultAvatar}
              alt={displayName}
              fill
              priority
              className="object-cover"
              sizes="28px"
            />
          </div>
          <div className="flex flex-col relative top-0.25">
            <span className="text-foreground -mb-1">{displayName}</span>
            <span>{username}</span>
          </div>
        </Link>
        <div>{formatDateTime(commentedTime)}</div>
      </CardHeader>
      <CardContent className="px-4 !py-1">
        <div>{commentText}</div>
      </CardContent>
    </Card>
  );
}

export default PostComment;
