import Image from "next/image";
import parse from "html-react-parser";

import PostSectionStats from "@/components/Post/PostSectionStats";
import ViewTracker from "@/components/Post/ViewTracker";
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
      <Card className="p-0 pb-1 gap-y-1 mb-3 md:mb-6 overflow-hidden -mt-2 xs:mt-0">
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
