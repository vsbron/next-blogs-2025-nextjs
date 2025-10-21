import Link from "next/link";
import Image from "next/image";
import { StarIcon } from "lucide-react";

import ArticlePreviewStats from "../ArticlePreviewStats";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import LionImg from "@/assets/article-lion.jpg";
import FeaturedBG from "@/assets/featuredBG.png";

// Dummy article
const featuredArticle = {
  title: "Why Lions are Awesome? We have 101 Reasons that prove it!",
  preview:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, accusantium voluptatum! Ipsum, consectetur itaque totam illo fuga hic iure eum neque eaque ab? Minus atque alias dicta ex tempore, iure libero quos. Maxime obcaecati nesciunt similique aut praesentium harum perspiciatis.",
  date: "Oct 19, 2025",
  views: 53,
  likes: 12,
  href: "/",
};

// The component
function FeaturedPost() {
  // Destructure the post data
  const { title, preview, date, views, likes, href } = featuredArticle;

  // Returned JSX
  return (
    <section className="grid sm:grid-cols-[.75fr_1fr] lg:grid-cols-2 items-center gap-y-0 gap-x-3 lg:gap-x-4 relative mb-2">
      <Image
        src={FeaturedBG}
        alt={title}
        className="absolute top-1/2 -translate-y-3/7 xs:-translate-y-1/4 sm:-translate-y-7/13 right-0 sm:-right-5 2xl:-right-20 -z-1 opacity-8 sm:opacity-10 object-cover"
      />
      <FeaturedImage title={title} href={href} />
      <Card className="gap-1 sm:gap-3 sm:px-6 py-4 sm:py-8 shadow-none bg-0 border-none">
        <CardHeader className="px-0">
          <div className="text-sm flex flex-row sm:flex-col md:flex-row items-center sm:items-start md:items-center justify-between gap-x-4 gap-y-1.5 xs:border-b xs:pb-2 border-foreground/10">
            <div className="bg-accent/15 font-bold px-2 py-1 rounded-lg flex items-center gap-1 lg:gap-1.5">
              <StarIcon
                width={15}
                height={15}
                className="fill-accent stroke-accent"
              />{" "}
              Featured<span className="hidden xs:inline"> article</span>
            </div>
            <ArticlePreviewStats views={views} likes={likes} date={date} />
          </div>
          <Link href={href} className="hover:text-foreground/75 transition-all">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-poppins xs:mt-2">
              {title}
            </h2>
          </Link>
        </CardHeader>
        <CardContent className="px-0">
          <p className="!mb-4 sm:!mb-6 text-sm md:text-base">{preview}</p>
          <Button asChild>
            <Link href={href}>Read more</Link>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}

// Helper component
function FeaturedImage({ title, href }: { title: string; href: string }) {
  // Returned JSX
  return (
    <Card className="p-3 sm:p-5 shadow-md sm:shadow-xl border-0 relative sm:mb-2">
      <Link className="group" href={href}>
        <CardContent className="relative h-44 xs:h-60 sm:h-110 overflow-hidden rounded-lg ">
          <Image
            src={LionImg}
            fill
            alt={title}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover rounded-lg sm:group-hover:scale-105 transition-transform duration-300 ease-out"
          />
        </CardContent>
      </Link>
    </Card>
  );
}

export default FeaturedPost;
