"use client";
import Image from "next/image";
import parse from "html-react-parser";

import { Post } from "@/utils/types";
import { useEffect } from "react";
import { incrementPostView } from "@/utils/actions/post";

function PostSection({ post }: { post: Post }) {
  // Destructure the post
  const { id, title, text, imageUrl } = post;

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
          sizes="66vw"
        />
      </div>
      {parse(text)}
    </>
  );
}

export default PostSection;
