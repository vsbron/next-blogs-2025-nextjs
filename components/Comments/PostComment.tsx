import Link from "next/link";
import Image from "next/image";

import DeleteComment from "@/components/Comments/DeleteComment";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { formatDateTime } from "@/utils/helpers";
import { Comment } from "@/utils/types";
import { EditIcon } from "lucide-react";
import defaultAvatar from "@/assets/defaultUser.png";

// Props type
type PostCommentProps = {
  comment: Comment;
  currentUserId: string | undefined;
};

// The component
function PostComment({ comment, currentUserId }: PostCommentProps) {
  // Destructure comment and user
  const { id, commentText, commentedTime, user, userId, postId } = comment;
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
        <div className="max-xs:max-w-22 max-xs:text-right max-xs:text-xs">
          {formatDateTime(commentedTime)}
          {currentUserId === userId && (
            <div className="font-normal flex gap-3 items-center justify-end mt-0.5">
              <span className="flex gap-1 text-foreground/60 cursor-pointer hover:text-foreground/40 transition-colors">
                <EditIcon className="w-4 h-4" /> Edit
              </span>
              <span className="text-destructive cursor-pointer hover:text-destructive/60 transition-colors">
                <DeleteComment commentId={id} postId={postId} />
              </span>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="px-4 !py-1">
        <div>{commentText}</div>
      </CardContent>
    </Card>
  );
}

export default PostComment;
