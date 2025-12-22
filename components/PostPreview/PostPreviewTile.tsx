import Link from "next/link";
import Image from "next/image";

import { ButtonsContainer } from "@/components/form/Buttons";
import PostPreviewStatsProps from "@/components/PostPreview/PostPreviewStats";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { formatDate, limitPreview } from "@/utils/helpers";
import { PostPreview } from "@/utils/types";
import CategoryTag from "../CategoryTag";

// Props type
type PostPreviewTileProps = {
  post: PostPreview;
};

// The component
function PostPreviewTile({ post }: PostPreviewTileProps) {
  // Destructure props and configure
  const {
    id,
    title,
    preview,
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
    <Card className="p-0 gap-0 overflow-hidden">
      <Link href={href} className="mb-3">
        <div className="relative h-40 sm:h-60 group overflow-hidden rounded-t-lg">
          <Image
            src={imageUrl}
            fill
            alt={title}
            sizes="(max-width: 640px) 90vw, (max-width: 768px) 50vw, 33vw"
            className="object-cover sm:group-hover:scale-102 transition-transform duration-300 ease-out"
            quality={80}
            priority
          />
          <CategoryTag className="bottom-2 left-4">{category}</CategoryTag>
        </div>
      </Link>
      <CardHeader className="px-4">
        <PostPreviewStatsProps
          views={views}
          likes={likesCount}
          date={date}
          comments={commentsCount}
        />
      </CardHeader>
      <CardContent className="pb-5 px-4 h-full flex flex-col items-start">
        <Link href={href} className="hover:text-foreground/75 transition-all">
          <h2 className="xs:text-lg md:text-xl">{title}</h2>
        </Link>
        <p className="mb-3 xs:mb-6 text-sm md:text-[15px]">
          {limitPreview(preview, 160)}
        </p>
        <ButtonsContainer className="mt-auto">
          <Button variant="outline" size="sm" asChild>
            <Link href={href}>Read post</Link>
          </Button>
        </ButtonsContainer>
      </CardContent>
    </Card>
  );
}

export default PostPreviewTile;
