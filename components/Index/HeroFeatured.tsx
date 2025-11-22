import Link from "next/link";
import Image from "next/image";
import { StarIcon } from "lucide-react";

import PostPreviewStatsProps from "@/components/PostPreview/PostPreviewStats";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { formatDate } from "@/utils/helpers";
import { PostPreview } from "@/utils/types";

import FeaturedBG from "@/assets/featuredBG.png";
import CategoryTag from "../CategoryTag";

// The component
function HeroFeatured({ post }: { post: PostPreview }) {
  // Destructure the post data
  const {
    title,
    preview,
    published,
    views,
    likesCount,
    id,
    imageUrl,
    category,
  } = post;
  const date = formatDate(published);

  // Returned JSX
  return (
    <section className="grid sm:grid-cols-[.85fr_1fr] md:grid-cols-[.75fr_1fr] lg:grid-cols-2 items-center gap-y-0 gap-x-3 lg:gap-x-4 relative mb-2">
      <Image
        src={FeaturedBG}
        alt={title}
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
        className="absolute top-1/2 -translate-y-3/7 xs:-translate-y-1/4 sm:-translate-y-7/13 right-0 sm:-right-5 2xl:-right-20 -z-1 opacity-8 sm:opacity-10 object-cover"
      />
      <div className="relative">
        <ArticleImage title={title} href={`/posts/${id}`} image={imageUrl} />
        <CategoryTag className="bottom-5 left-5 sm:bottom-8 sm:left-6 md:bottom-10 md:left-8">
          {category}
        </CategoryTag>
      </div>
      <Card className="gap-1 sm:gap-3 px-0 sm:px-6 py-4 sm:py-8 shadow-none bg-0 border-none">
        <CardHeader className="px-0">
          <div className="text-sm flex flex-row sm:flex-col md:flex-row items-center sm:items-start md:items-center justify-between gap-x-4 gap-y-1.5 xs:border-b xs:pb-2 border-foreground/10">
            <div className="bg-accent/15 font-bold px-1.5 pt-0.5 pb-0.75 sm:px-2 sm:py-1 rounded-lg flex items-center gap-1 lg:gap-1.5 text-sm">
              <StarIcon className="fill-accent stroke-accent w-3 h-3 sm:w-4 sm:h-4" />{" "}
              Featured<span className="hidden xs:inline"> article</span>
            </div>
            <PostPreviewStatsProps
              views={views}
              likes={likesCount}
              date={date}
            />
          </div>
          <Link
            href={`/posts/${id}`}
            className="hover:text-foreground/75 transition-all"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xs:mt-2">
              {title}
            </h2>
          </Link>
        </CardHeader>
        <CardContent className="px-0">
          <p className="!mb-4 sm:!mb-6 text-sm md:text-base">{preview}</p>
          <Button asChild>
            <Link href={`/posts/${id}`}>Read post</Link>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}

// Helper component
function ArticleImage({
  title,
  href,
  image,
}: {
  title: string;
  href: string;
  image: string;
}) {
  // Returned JSX
  return (
    <Card className="p-3 sm:p-4 md:p-5 shadow-md sm:shadow-lg shadow-primary/25 border-0 relative sm:mb-2">
      <Link className="group" href={href}>
        <CardContent className="relative h-44 xs:h-60 sm:h-88 md:h-110 overflow-hidden rounded-lg">
          <Image
            src={image}
            fill
            alt={title}
            sizes="(max-width: 640px) 95vw, 50vw"
            className="object-cover rounded-lg sm:group-hover:scale-105 transition-transform duration-300 ease-out"
            priority
          />
        </CardContent>
      </Link>
    </Card>
  );
}

export default HeroFeatured;
