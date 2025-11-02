import Link from "next/link";
import Image from "next/image";
import { Prisma } from "@prisma/client";
import db from "@/utils/db";

import ArticlePreviewStats from "./ArticlePreviewStats";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { formatDate, limitPreview } from "@/utils/helpers";
import { Skeleton } from "./ui/skeleton";

// Props type
type PostWithCount = Prisma.PostGetPayload<{
  include: { _count: { select: { likes: true } } };
}>;

// The component
function ArticlePreviewTile({ post }: { post: PostWithCount }) {
  // Destructure props and configure
  const { id, title, preview, published, views, imageUrl, _count } = post;
  const href = `/posts/${id}`;
  const date = formatDate(published);

  // Returned JSX
  return (
    <Card className="p-0 gap-0">
      <Link href={href} className="mb-3">
        <div className="relative h-40 sm:h-60 group overflow-hidden rounded-lg">
          <Image
            src={imageUrl}
            fill
            alt={title}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            className="object-cover rounded-lg sm:group-hover:scale-105 transition-transform duration-300 ease-out"
          />
        </div>
      </Link>
      <CardHeader className="px-4">
        <ArticlePreviewStats views={views} likes={_count.likes} date={date} />
      </CardHeader>
      <CardContent className="pb-5 px-4 h-full flex flex-col items-start">
        <Link href={href} className="hover:text-foreground/75 transition-all">
          <h2 className="xs:text-lg md:text-xl font-poppins">{title}</h2>
        </Link>
        <p className="mb-3 xs:mb-6 text-sm md:text-base">
          {limitPreview(preview, 160)}
        </p>
        <Button variant="outline" size="sm" className="mt-auto" asChild>
          <Link href={href}>Read more</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export function ArticlePreviewTileSkeleton() {
  // Returned JSX
  return (
    <Card className="p-0 gap-4 bg-background">
      <Skeleton className="h-40 sm:h-60"></Skeleton>
      <div className="px-4 pb-5 flex flex-col gap-3">
        <Skeleton className="h-3.5 w-25"></Skeleton>
        <Skeleton className="h-4.5 w-35 mt-1"></Skeleton>
        <Skeleton className="h-3.5 w-50"></Skeleton>
        <Skeleton className="h-8 w-23.5 mt-3.5"></Skeleton>
      </div>
    </Card>
  );
}
export default ArticlePreviewTile;
