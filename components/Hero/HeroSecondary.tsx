import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import PostPreviewStatsProps from "@/components/PostPreviewStats";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { limitPreview } from "@/utils/helpers";

// Props type
type HeroSecondaryProps = {
  title: string;
  preview: string;
  date: string;
  views: number;
  likes: number;
  href: string;
};

// The component
function HeroSecondary({
  article,
  image,
}: {
  article: HeroSecondaryProps;
  image: StaticImageData;
}) {
  // Destructure the post data
  const { title, preview, date, views, likes, href } = article;
  // Returned JSX
  return (
    <section className="grid sm:grid-cols-[.75fr_1fr] items-start gap-y-1 gap-x-3 lg:gap-x-4 relative">
      <ArticleImage title={title} href={href} image={image} />
      <Card className="gap-1 sm:gap-x-3 lg:gap-2 px-0 sm:px-6 pt-2 pb-0 lg:p-3 shadow-none bg-0 border-none">
        <CardHeader className="px-0 gap-1">
          <div className="flex justify-start xs:border-b xs:pb-2 border-foreground/10">
            <PostPreviewStatsProps views={views} likes={likes} date={date} />
          </div>
          <Link href={href} className="hover:text-foreground/75 transition-all">
            <h2 className="text-lg md:text-xl xl:text-2xl xs:mt-1">{title}</h2>
          </Link>
        </CardHeader>
        <CardContent className="px-0">
          <p className="!mb-4 text-sm md:text-base">
            {limitPreview(preview, 120)}
          </p>
          <Button size="sm" className="mt-1" asChild>
            <Link href={href}>Read post</Link>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}

export default HeroSecondary;

// Helper component
function ArticleImage({
  title,
  href,
  image,
}: {
  title: string;
  href: string;
  image: StaticImageData;
}) {
  // Returned JSX
  return (
    <Card className="p-2 sm:p-3 shadow-sm xs:shadow-md shadow-primary/25 border-0 relative sm:mb-2">
      <Link className="group" href={href}>
        <CardContent className="relative h-40 sm:h-50 lg:h-60 overflow-hidden rounded-lg">
          <Image
            src={image}
            fill
            alt={title}
            sizes="(max-width: 640px) 95vw, (max-width: 1024px) 50vw, 30vw"
            className="object-cover rounded-lg sm:group-hover:scale-105 transition-transform duration-300 ease-out"
            priority
          />
        </CardContent>
      </Link>
    </Card>
  );
}
