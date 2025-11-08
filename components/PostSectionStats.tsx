import Link from "next/link";

import PostSectionStatsLike from "@/components/PostSectionStatsLike";
import { CardContent } from "@/components/ui/card";

import { Post } from "@/utils/types";
import { Eye, User } from "lucide-react";

function PostSectionStats({ post }: { post: Post }) {
  // Destructure the post and set icons class
  const { id, author, views, likes } = post;

  // Returned JSX
  return (
    <CardContent className="px-3 xs:px-4 text-sm xs:text-md">
      <div className="flex items-center justify-between text-foreground/50 font-bold">
        <div className="flex items-center gap-x-1 mr-3">
          <User className="post-stats-icon" />
          <Link href={`/author/${author.username}`} className="before:h-0">
            {author.displayName}
          </Link>
        </div>
        <div className="flex items-center gap-x-3 xs:gap-x-4">
          <div className="post-stats-icons-container">
            <Eye className="post-stats-icon" />
            {views}
          </div>
          <div className="post-stats-icons-container">
            <PostSectionStatsLike likes={likes} postId={id} />
          </div>
        </div>
      </div>
    </CardContent>
  );
}

export default PostSectionStats;
