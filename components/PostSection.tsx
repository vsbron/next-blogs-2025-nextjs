"use client";
import { useEffect } from "react";
import Image from "next/image";
import parse from "html-react-parser";

import { Post } from "@/utils/types";
import { incrementPostView } from "@/utils/actions/post";
import Link from "next/link";
import { Eye, ThumbsUp, User } from "lucide-react";
import { Card, CardContent } from "./ui/card";

function PostSection({ post }: { post: Post }) {
  // Destructure the post
  const { id, title, text, imageUrl, author, views, _count } = post;

  // Use Effect function that updates the views on every render
  useEffect(() => {
    incrementPostView(id);
  }, [id]);

  // Returned JSX
  return (
    <>
      <Card className="p-0 pb-2 gap-y-1.5 mb-6 overflow-hidden">
        <div className="h-44 xs:h-60 md:h-80 lg:h-96 relative">
          <Image
            src={imageUrl}
            fill
            className="object-cover"
            alt={title}
            sizes="(max-width: 1024px) 100vw, 66vw"
          />
        </div>
        <CardContent className="px-4">
          <div className="flex items-center justify-between text-foreground/50 font-semibold">
            <div className="flex items-center gap-x-1 mr-3">
              <User className="w-5 h-5 stroke-primary/80" />
              <Link href={`/author/${author.username}`} className="before:h-0">
                {author.displayName}
              </Link>
            </div>
            <div className="flex items-center gap-x-4">
              <div className="flex items-center gap-x-1.5">
                <Eye className="w-5 h-5 stroke-primary/80" />
                {views}
              </div>
              <div className="flex items-center gap-x-1.5">
                <ThumbsUp className="w-5 h-5 stroke-primary/80" />
                {_count.likes}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      {parse(text)}
    </>
  );
}

export default PostSection;
