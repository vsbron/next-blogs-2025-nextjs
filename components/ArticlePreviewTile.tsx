import Image, { StaticImageData } from "next/image";
import { Calendar1Icon, EyeIcon, ThumbsUpIcon } from "lucide-react";

import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

type ArticlePreviewProps = {
  title: string;
  preview: string;
  date: string;
  views: number;
  likes: number;
  image: StaticImageData;
  href: string;
};

function ArticlePreviewTile(post: ArticlePreviewProps) {
  // Destructure props
  const { title, preview, date, views, likes, image, href } = post;
  // Returned JSX
  return (
    <Card className="p-0 gap-0">
      <Link href={href}>
        <div className="relative h-60 mb-2">
          <Image
            src={image}
            fill
            alt={title}
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover rounded-lg sm:group-hover:scale-105 transition-transform duration-300 ease-out"
          />
        </div>
      </Link>
      <CardHeader className="px-4">
        <div className="text-sm flex flex-row sm:flex-col md:flex-row items-center sm:items-start md:items-center justify-between gap-x-4 gap-y-1.5">
          <div className="flex items-center gap-3 lg:gap-4 text-foreground/50 font-semibold">
            <div className="flex items-center gap-x-1">
              <EyeIcon className="w-4 h-4 stroke-primary/80" />
              {views}
            </div>
            <div className="flex items-center gap-x-1">
              <ThumbsUpIcon className="w-4 h-4 stroke-primary/80" />
              {likes}
            </div>
            <div className="flex items-center gap-x-1.5">
              <Calendar1Icon className="w-4 h-4 stroke-primary/80" />
              {date}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-5 px-4">
        <Link href={href}>
          <h2 className="text-lg md:text-xl font-poppins">{title}</h2>
        </Link>
        <p className="mb-6 text-sm md:text-base">{preview}</p>
        <Button variant="outline" size="sm" asChild>
          <Link href={href}>Read more</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export default ArticlePreviewTile;
