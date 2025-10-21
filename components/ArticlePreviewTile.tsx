import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import ArticlePreviewStats from "./ArticlePreviewStats";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { limitPreview } from "@/utils/helpers";

// Props type
type ArticlePreviewProps = {
  title: string;
  preview: string;
  date: string;
  views: number;
  likes: number;
  image: StaticImageData;
  href: string;
};

// The component
function ArticlePreviewTile(post: ArticlePreviewProps) {
  // Destructure props
  const { title, preview, date, views, likes, image, href } = post;

  // Returned JSX
  return (
    <Card className="p-0 gap-0">
      <Link href={href}>
        <div className="relative h-40 sm:h-60 mb-2 group overflow-hidden rounded-lg">
          <Image
            src={image}
            fill
            alt={title}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            className="object-cover rounded-lg sm:group-hover:scale-105 transition-transform duration-300 ease-out"
          />
        </div>
      </Link>
      <CardHeader className="px-4">
        <ArticlePreviewStats views={views} likes={likes} date={date} />
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

export default ArticlePreviewTile;
