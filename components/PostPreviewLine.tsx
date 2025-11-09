import Link from "next/link";
import Image from "next/image";

import PostPreviewStatsProps from "@/components/PostPreviewStats";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { formatDate } from "@/utils/helpers";
import { PostPreview } from "@/utils/types";
import { EditIcon, EyeIcon, Trash2Icon } from "lucide-react";
import { Button } from "./ui/button";

// Props type
type PostPreviewLineProps = {
  post: PostPreview;
};

// The component
function PostPreviewLine({ post }: PostPreviewLineProps) {
  // Destructure props and configure
  const { id, title, preview, published, views, imageUrl, likes } = post;
  const date = formatDate(published);

  // Returned JSX
  return (
    <Card className="p-0 gap-0 overflow-hidden grid grid-cols-[1fr_min-content] md:grid-cols-[120px_1fr_min-content]">
      <div className="relative w-full h-full hidden md:block">
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
        <CardHeader className="px-4 -mb-1">
          <PostPreviewStatsProps
            views={views}
            likes={likes.length}
            date={date}
          />
        </CardHeader>
        <CardContent className="px-4 flex flex-col items-start">
          <h2 className="md:text-xl leading-snug">{title}</h2>
          <p className="text-sm md:text-base leading-snug pb-3">{preview}</p>
        </CardContent>
      </div>
      <div className="flex flex-col gap-y-1 ml-auto p-3 self-center w-15">
        <Button variant="outline" size="xs" aria-label="View post">
          <Link href={`/posts/${id}`}>
            <EyeIcon className="post-stats-icon" />
          </Link>
        </Button>
        <Button variant="outline" size="xs" aria-label="Edit post">
          <Link href={`/dashboard/my-posts/edit/${id}`}>
            <EditIcon className="post-stats-icon" />
          </Link>
        </Button>
        <Button variant="destructive" size="xs" aria-label="Delete post">
          <Trash2Icon className="post-stats-icon cursor-pointer stroke-white" />
        </Button>
      </div>
    </Card>
  );
}

export default PostPreviewLine;
