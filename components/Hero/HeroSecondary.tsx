import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import ArticlePreviewStats from "../ArticlePreviewStats";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { limitPreview } from "@/utils/helpers";

type HeroSecondaryProps = {
  title: string;
  preview: string;
  date: string;
  views: number;
  likes: number;
  href: string;
};

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
    <section className="grid sm:grid-cols-[.75fr_1fr] items-start gap-y-0 gap-x-3 lg:gap-x-4 relative mb-2">
      <ArticleImage title={title} href={href} image={image} />
      <Card className="gap-1 sm:gap-x-3 lg:gap-2 sm:px-6 sm:py-2 lg:p-3 shadow-none bg-0 border-none">
        <CardHeader className="px-0 gap-1">
          <div className="flex justify-start xs:border-b xs:pb-2 border-foreground/10">
            <ArticlePreviewStats views={views} likes={likes} date={date} />
          </div>
          <Link href={href} className="hover:text-foreground/75 transition-all">
            <h2 className="text-lg md:text-xl xl:text-2xl font-poppins xs:mt-1">
              {title}
            </h2>
          </Link>
        </CardHeader>
        <CardContent className="px-0">
          <p className="!mb-4 text-sm md:text-base">
            {limitPreview(preview, 120)}
          </p>
          <Button size="sm" asChild>
            <Link href={href}>Read more</Link>
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
    <Card className="p-2 sm:p-3 shadow-md shadow-primary/35 border-0 relative sm:mb-2">
      <Link className="group" href={href}>
        <CardContent className="relative h-40 sm:h-50 lg:h-60 overflow-hidden rounded-lg">
          <Image
            src={image}
            fill
            alt={title}
            sizes="(max-width: 768px) 50vw, 30vw"
            className="object-cover rounded-lg sm:group-hover:scale-105 transition-transform duration-300 ease-out"
          />
        </CardContent>
      </Link>
    </Card>
  );
}
