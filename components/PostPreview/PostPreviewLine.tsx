import Image from "next/image";

import PostPreviewButtons from "@/components/PostPreview/PostPreviewButtons";
import PostPreviewStatsProps from "@/components/PostPreview/PostPreviewStats";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { formatDate } from "@/utils/helpers";
import { PostPreview } from "@/utils/types";

// Props type
type PostPreviewLineProps = {
  post: PostPreview;
};

// The component
function PostPreviewLine({ post }: PostPreviewLineProps) {
  // Destructure props and configure
  const { id, title, preview, published, views, imageUrl, likes, category } =
    post;
  const date = formatDate(published);

  // Returned JSX
  return (
    <Card className="p-0 gap-0 grid grid-cols-[1fr_min-content] md:grid-cols-[120px_1fr_min-content]">
      <div className="relative w-full min-h-30 h-full hidden md:block rounded-l-xl overflow-hidden">
        <Image
          src={imageUrl}
          fill
          alt={title}
          sizes="15vw"
          className="object-cover"
          priority
        />
      </div>
      <div className="pt-3">
        <CardHeader className="px-4 mb-0.1">
          <PostPreviewStatsProps
            views={views}
            likes={likes.length}
            date={date}
          />
        </CardHeader>
        <CardContent className="px-4 flex flex-col items-start">
          <div className="bg-primary/90 text-white font-bold pt-0.15 pb-0.25 px-1.5 text-[11px] leading-4 rounded-md mb-0.5">
            {category}
          </div>
          <h2 className=" md:text-lg lg:text-xl leading-snug line-clamp-1">
            {title}
          </h2>
          <p className="text-sm md:text-base leading-snug line-clamp-1">
            {preview}
          </p>
        </CardContent>
      </div>
      <PostPreviewButtons postId={id} />
    </Card>
  );
}

export default PostPreviewLine;
