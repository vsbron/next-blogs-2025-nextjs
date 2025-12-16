import Image from "next/image";

import PostPreviewButtons from "@/components/PostPreview/PostPreviewButtons";
import PostPreviewStatsProps from "@/components/PostPreview/PostPreviewStats";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { formatDate } from "@/utils/helpers";
import { PostPreview } from "@/utils/types";

// Props type
type MyPostPreviewProps = {
  post: PostPreview;
};

// The component
function MyPostPreview({ post }: MyPostPreviewProps) {
  // Destructure props and configure
  const {
    id,
    title,
    preview,
    published,
    views,
    imageUrl,
    likesCount,
    category,
  } = post;
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
        <CardHeader className="px-4 mb-0.1 flex flex-col-reverse xs:flex-row gap-2 xs:gap-4 items-start xs:items-center">
          <div className="bg-primary/90 text-white font-bold py-0.15 px-1.5 text-[11px] leading-4 rounded-md">
            {category}
          </div>
          <PostPreviewStatsProps views={views} likes={likesCount} date={date} />
        </CardHeader>
        <CardContent className="px-4 flex flex-col items-start">
          <h2 className=" md:text-lg lg:text-xl leading-snug line-clamp-1 mt-0.5 xs:mt-1">
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

export default MyPostPreview;
