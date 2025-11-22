import Link from "next/link";
import Image from "next/image";

import PostPreviewStatsProps from "@/components/PostPreview/PostPreviewStats";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { formatDate, limitPreview } from "@/utils/helpers";
import { PostPreview } from "@/utils/types";
import CategoryTag from "../CategoryTag";

function HeroSecondary({ post }: { post: PostPreview }) {
  // Destructure the post data
  const {
    title,
    preview,
    published,
    views,
    likesCount,
    imageUrl,
    id,
    category,
  } = post;
  const date = formatDate(published);

  // Returned JSX
  return (
    <section className="grid sm:grid-cols-[.85fr_1fr] md:grid-cols-[.75fr_1fr] items-start gap-y-1 gap-x-3 lg:gap-x-4 relative">
      <Card className="p-2 sm:p-3 shadow-sm xs:shadow-md shadow-primary/25 border-0 relative sm:mb-2">
        <ArticleImage
          title={title}
          href={`/posts/${id}`}
          image={imageUrl}
          category={category}
        />
      </Card>
      <Card className="gap-1 sm:gap-x-3 lg:gap-2 px-0 sm:px-6 pt-2 pb-0 lg:p-3 shadow-none bg-0 border-none">
        <CardHeader className="px-0 gap-1">
          <div className="flex justify-start xs:border-b xs:pb-2 border-foreground/10">
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
            <h2 className="text-lg md:text-xl xl:text-2xl xs:mt-1">{title}</h2>
          </Link>
        </CardHeader>
        <CardContent className="px-0">
          <p className="!mb-4 text-sm md:text-base">
            {limitPreview(preview, 120)}
          </p>
          <Button size="sm" className="mt-1" asChild>
            <Link href={`/posts/${id}`}>Read post</Link>
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
  category,
}: {
  title: string;
  href: string;
  image: string;
  category: string;
}) {
  // Returned JSX
  return (
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
        <CategoryTag className="bottom-1.5 left-1.5 md:bottom-2 md:left-2">
          {category}
        </CategoryTag>
      </CardContent>
    </Link>
  );
}
