import Link from "next/link";
import { EyeIcon, FilePenLine, ThumbsUpIcon } from "lucide-react";

import SectionTitle from "../SectionTitle";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { limitPreview } from "@/utils/helpers";

// Dummy data
const viewsList = [
  {
    label: "Why Lions are Awesome? We have 101 reasons that prove it!",
    href: "/",
    views: 953,
  },
  {
    label: "How to survive in a huge city",
    href: "/",
    views: 823,
  },
  {
    label: "AI solved another major problem",
    href: "/",
    views: 736,
  },
  {
    label: "Eat HEALTHY!",
    href: "/",
    views: 701,
  },
  {
    label: "UFOs were sighted again!",
    href: "/",
    views: 528,
  },
  {
    label: "Why Lions are Awesome? We have 102 reasons that prove it!",
    href: "/",
    views: 369,
  },
  {
    label: "How to survive in a big city",
    href: "/",
    views: 112,
  },
  {
    label: "AI solved another big problem",
    href: "/",
    views: 96,
  },
  {
    label: "Eat HEALTHY! Always",
    href: "/",
    views: 55,
  },
  {
    label: "UFOs were sighted again and again!",
    href: "/",
    views: 9,
  },
];
const likesList = [
  {
    label: "Why Lions are Awesome? We have 101 reasons that prove it!",
    href: "/",
    likes: 953,
  },
  {
    label: "How to survive in a huge city",
    href: "/",
    likes: 823,
  },
  {
    label: "AI solved another major problem",
    href: "/",
    likes: 736,
  },
  {
    label: "Eat HEALTHY!",
    href: "/",
    likes: 701,
  },
  {
    label: "UFOs were sighted again!",
    href: "/",
    likes: 528,
  },
  {
    label: "Why Lions are Awesome? We have 102 reasons that prove it!",
    href: "/",
    likes: 369,
  },
  {
    label: "How to survive in a big city",
    href: "/",
    likes: 112,
  },
  {
    label: "AI solved another big problem",
    href: "/",
    likes: 96,
  },
  {
    label: "Eat HEALTHY! always",
    href: "/",
    likes: 55,
  },
  {
    label: "UFOs were sighted again and again!",
    href: "/",
    likes: 9,
  },
];
const authorsList = [
  { label: "ChatGPT", href: "/", posts: 45 },
  { label: "Default user", href: "/", posts: 39 },
  { label: "Stephen King", href: "/", posts: 32 },
  { label: "VSBroN", href: "/", posts: 29 },
  { label: "AnnonWriter", href: "/", posts: 25 },
  { label: "Gurst", href: "/", posts: 24 },
  { label: "GRRM", href: "/", posts: 15 },
  { label: "The Blogger", href: "/", posts: 11 },
  { label: "Unknown user", href: "/", posts: 8 },
  { label: "User413594", href: "/", posts: 2 },
];

function IndexStats() {
  // Returned JSX
  return (
    <section className="pb-8">
      <SectionTitle as="h2">Top Posts & Users</SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 lg:gap-x-6 gap-y-6">
        <StatsCard list={viewsList} title="Most liked posts" />
        <StatsCard
          list={likesList}
          title="Most viewed posts"
          className="md:hidden lg:block"
        />
        <StatsCard list={authorsList} title="User with most posts" />
      </div>
    </section>
  );
}

// Props type
type StatsCardProps = {
  list: {
    label: string;
    href: string;
    posts?: number;
    views?: number;
    likes?: number;
  }[];
  title: string;
  className?: string;
};

// Helper component
function StatsCard({ list, title, className }: StatsCardProps) {
  // Returned JSX
  return (
    <Card
      className={`gap-0 py-4 xs:py-6 px-6 truncate max-w-[450px] ${className}`}
    >
      <CardHeader className="text-xl font-poppins border-b-2 border-accent px-0 mb-3 flex items-center gap-x-2 pb-2">
        {list[0].views && <EyeIcon className="!w-5 !h-5 stroke-primary" />}
        {list[0].likes && <ThumbsUpIcon className="!w-5 !h-5 stroke-primary" />}
        {list[0].posts && <FilePenLine className="!w-5 !h-5 stroke-primary" />}
        {title}
      </CardHeader>
      <CardContent className="px-0">
        <ul className="!pl-0 flex flex-col gap-1 text-sm lg:text-base">
          {list.map(({ label, href, posts, views, likes }) => (
            <li
              key={label}
              className="flex justify-between items-center gap-x-4"
            >
              <Link href={href} className="link-primary single-line-preview">
                {label}
              </Link>

              <div className="flex items-center gap-1 text-foreground/40 font-semibold text-sm min-w-11">
                {views && <EyeIcon className="!w-4 !h-4 stroke-primary" />}
                {likes && <ThumbsUpIcon className="!w-4 !h-4 stroke-primary" />}
                {posts && <FilePenLine className="!w-4 !h-4 stroke-primary" />}
                {views || likes || posts}
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default IndexStats;
