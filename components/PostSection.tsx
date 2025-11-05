"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import parse from "html-react-parser";

import PostStats from "@/components/PostStats";
import { Card, CardContent } from "@/components/ui/card";

import { Post } from "@/utils/types";
import { incrementPostView } from "@/utils/actions/post";

import { Eye, ThumbsUp, User } from "lucide-react";

function PostSection({ post }: { post: Post }) {
  // Destructure the post and set icons class
  const { id, title, text, imageUrl, author, views, _count } = post;
  const iconsStatsContainerClass = "flex items-center gap-x-1 xs:gap-x-1.5";
  const iconsClass = "w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-primary/80";

  // Use Effect function that updates the views on every render
  useEffect(() => {
    incrementPostView(id);
  }, [id]);

  // Returned JSX
  return (
    <>
      <Card className="p-0 pb-1.25 md:pb-2 gap-y-1 md:gap-y-1.5 mb-3 md:mb-6 overflow-hidden">
        <div className="h-44 xs:h-60 md:h-70 lg:h-96 relative">
          <Image
            src={imageUrl}
            fill
            className="object-cover"
            alt={title}
            sizes="(max-width: 1024px) 100vw, 66vw"
          />
        </div>
        <CardContent className="px-3 xs:px-4 text-sm xs:text-md">
          <div className="flex items-center justify-between text-foreground/50 font-semibold">
            <div className="flex items-center gap-x-1 mr-3">
              <User className={iconsClass} />
              <Link href={`/author/${author.username}`} className="before:h-0">
                {author.displayName}
              </Link>
            </div>
            <div className="flex items-center gap-x-3 xs:gap-x-4">
              <div className={iconsStatsContainerClass}>
                <Eye className={iconsClass} />
                {views}
              </div>
              <div className={iconsStatsContainerClass}>
                <ThumbsUp className={iconsClass} />
                {_count.likes}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="md:hidden">
        <PostStats post={post} />
      </div>
      {parse(text)}
    </>
  );
}

export default PostSection;
