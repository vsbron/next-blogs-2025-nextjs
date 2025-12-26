import Link from "next/link";
import Image from "next/image";

import { ButtonsContainer } from "@/components/form/Buttons";
import PostPreviewStatsProps from "@/components/PostPreview/PostPreviewStats";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { formatDate } from "@/utils/helpers";
import { PostPreview } from "@/utils/types";

// Props type
type PostPreviewTileMiniProps = {
  post: PostPreview;
};

// The component
function PostPreviewTileMini({ post }: PostPreviewTileMiniProps) {
  // Destructure props and configure
  const {
    id,
    title,
    published,
    views,
    imageUrl,
    likesCount,
    commentsCount,
    category,
  } = post;
  const href = `/posts/${id}`;
  const date = formatDate(published);

  // Returned JSX
  return (
    <Card className="p-0 gap-0 overflow-hidden max-w-80 single-line-preview truncate">
      <Link href={href} className="mb-2">
        <div className="relative h-20 sm:h-25 group overflow-hidden rounded-t-lg">
          <Image
            src={imageUrl}
            fill
            alt={title}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
            className="object-cover sm:group-hover:scale-102 transition-transform duration-300 ease-out"
            priority
          />
          <div className="absolute bottom-2 left-4 z-20 bg-primary shadow border border-border text-white font-bold pt-0.25 pb-0.5 px-2.5 text-xs tracking-0 rounded-md">
            {category}
          </div>
        </div>
      </Link>
      <CardHeader className="px-4 grid-rows-1">
        <PostPreviewStatsProps
          views={views}
          likes={likesCount}
          date={date}
          comments={commentsCount}
        />
      </CardHeader>
      <CardContent className="pt-1 pb-3 px-3 h-full flex flex-col items-start">
        <Link
          href={href}
          className="hover:text-foreground/75 transition-all max-w-full"
        >
          <h3 className="md:text-md truncate">{title}</h3>
        </Link>
        <ButtonsContainer className="mt-1">
          <Button variant="outline" size="xs" asChild>
            <Link href={href}>Read post</Link>
          </Button>
        </ButtonsContainer>
      </CardContent>
    </Card>
  );
}

export default PostPreviewTileMini;
