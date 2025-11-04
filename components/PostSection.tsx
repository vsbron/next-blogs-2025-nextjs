"use client";
import { useEffect } from "react";
import Image from "next/image";
import parse from "html-react-parser";

import { Post } from "@/utils/types";
import { incrementPostView } from "@/utils/actions/post";
import Link from "next/link";

function PostSection({ post }: { post: Post }) {
  // Destructure the post
  const { id, title, text, imageUrl, author } = post;

  // Use Effect function that updates the views on every render
  useEffect(() => {
    incrementPostView(id);
  }, [id]);

  // Returned JSX
  return (
    <>
      <div className="h-96 relative mb-5">
        <Image
          src={imageUrl}
          fill
          className="object-cover"
          alt={title}
          sizes="(max-width: 991px) 100vw, 66vw"
        />
      </div>
      <div>
        <Link href={`/author/${author.username}`}>{author.displayName}</Link>
      </div>
      {parse(text)}
    </>
  );
}

export default PostSection;
