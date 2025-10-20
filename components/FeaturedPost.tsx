import Link from "next/link";
import Image from "next/image";
import { Calendar1Icon, EyeIcon, StarIcon, ThumbsUpIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import LionImg from "@/assets/article-lion.jpg";
import FeaturedBG from "@/assets/featuredBG.png";

// Props type
type FeaturedPostProps = {
  title: string;
  preview: string;
  date: string;
  views: number;
  likes: number;
  href: string;
};

// The component
function FeaturedPost(post: FeaturedPostProps) {
  // Destructure the passed data
  const { title, preview, date, views, likes, href } = post;

  // Returned JSX
  return (
    <section className="grid sm:grid-cols-[.75fr_1fr] lg:grid-cols-2 items-center gap-y-0 gap-x-3 lg:gap-x-4 relative">
      <Image
        src={FeaturedBG}
        alt={title}
        className="absolute top-1/2 -translate-y-3/7 xs:-translate-y-1/4 sm:-translate-y-7/13 right-0 sm:-right-5 2xl:-right-20 -z-1 opacity-10 sm:opacity-15 object-cover"
      />
      <Link href={href}>
        <FeaturedImage title={title} />
      </Link>
      <Card className="gap-3 sm:px-6 py-4 sm:py-8 shadow-none bg-0 border-none">
        <CardHeader className="px-0">
          <FeaturedStats date={date} views={views} likes={likes} />
          <Link href={href} className="hover:text-foreground/75 transition-all">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-poppins xs:mt-2">
              {title}
            </h2>
          </Link>
        </CardHeader>
        <CardContent className="px-0">
          <p className="mb-6 text-sm md:text-base">{preview}</p>
          <Button asChild>
            <Link href={href}>Read more</Link>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}

// Helper components
function FeaturedImage({ title }: { title: string }) {
  // Returned JSX
  return (
    <Card className="p-3 sm:p-5 shadow-md sm:shadow-lg border-0 relative group">
      <CardContent className="relative h-44 xs:h-60 sm:h-96 overflow-hidden">
        <Image
          src={LionImg}
          fill
          alt={title}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover rounded-lg sm:group-hover:scale-105 transition-transform duration-300 ease-out"
        />
      </CardContent>
    </Card>
  );
}

// Props type
type FeaturedStatsProps = {
  date: string;
  views: number;
  likes: number;
};
function FeaturedStats({ date, views, likes }: FeaturedStatsProps) {
  // Returned JSX
  return (
    <div className="text-sm flex flex-row sm:flex-col md:flex-row items-center sm:items-start md:items-center justify-between gap-x-4 gap-y-1.5 xs:border-b xs:pb-2 border-foreground/10">
      <div className="bg-accent/10 font-bold px-2 py-1 rounded-lg flex items-center gap-1 lg:gap-1.5">
        <StarIcon
          width={15}
          height={15}
          className="fill-accent stroke-accent"
        />{" "}
        Featured<span className="hidden xs:inline"> article</span>
      </div>
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
  );
}

export default FeaturedPost;
