import Image from "next/image";
import parse from "html-react-parser";

import ViewTracker from "@/components/ViewTracker";
import PostSectionStats from "@/components/PostSectionStats";
import PostStats from "@/components/Sidebar/PostStats";
import { Card } from "@/components/ui/card";

import { Post } from "@/utils/types";

function PostSection({ post }: { post: Post }) {
  // Destructure the post
  const { id, title, text, imageUrl } = post;

  // Returned JSX
  return (
    <>
      <ViewTracker id={id} />
      <Card className="p-0 pb-1.25 md:pb-2 gap-y-1 md:gap-y-1.5 mb-3 md:mb-6 overflow-hidden">
        <div className="h-44 xs:h-60 md:h-70 lg:h-96 relative">
          <Image
            src={imageUrl}
            fill
            className="object-cover"
            alt={title}
            sizes="(max-width: 1024px) 100vw, 66vw"
            priority
          />
        </div>
        <PostSectionStats post={post} />
      </Card>
      <div className="md:hidden">
        <PostStats post={post} />
      </div>
      {parse(text)}
    </>
  );
}

export default PostSection;
