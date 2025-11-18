import Link from "next/link";
import Image from "next/image";

import PostSectionStatsLike from "@/components/Post/PostSectionStatsLike";
import { CardContent } from "@/components/ui/card";

import { Post } from "@/utils/types";

import { Eye } from "lucide-react";
import defaultAvatar from "@/assets/defaultUser.png";

function PostSectionStats({ post }: { post: Post }) {
  // Destructure the post and set icons class
  const { id, author, views, likes } = post;

  // Returned JSX
  return (
    <CardContent className="px-3 xs:px-4 text-sm xs:text-md">
      <div className="flex items-center justify-between text-foreground/50 font-bold">
        <div className="flex items-center gap-x-1 mr-3">
          <Link
            href={`/authors/${author.username}`}
            className="flex items-center gap-2 decoration-0 before:hidden"
          >
            <div className="relative w-7.5 h-7.5 rounded-full overflow-hidden">
              <Image
                src={author.imageUrl || defaultAvatar}
                alt={author.displayName}
                fill
                priority
                className="object-cover"
                sizes="30px"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-foreground -mb-1">
                {author.displayName}
              </span>
              <span>{author.username}</span>
            </div>
          </Link>
        </div>
        <div className="flex items-center text-[15px] gap-x-4 xs:gap-x-5">
          <div className="post-stats-icons-container">
            <PostSectionStatsLike likes={likes} postId={id} />
          </div>
          <div className="post-stats-icons-container">
            <Eye className="post-stats-icon" />
            {views}
          </div>
        </div>
      </div>
    </CardContent>
  );
}

export default PostSectionStats;
