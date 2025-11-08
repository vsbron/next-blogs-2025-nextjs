import Link from "next/link";
import { EyeIcon, FilePenLine, ThumbsUpIcon } from "lucide-react";

import SectionTitle from "./SectionTitle";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

// Dummy data
const viewsList = [
  {
    label: "Why Lions are Awesome? We have 101 reasons that prove it!",
    href: "/1",
    views: 953,
    likes: 0,
  },
  {
    label: "How to survive in a huge city",
    href: "/2",
    views: 823,
  },
  {
    label: "AI solved another major problem",
    href: "/3",
    views: 736,
  },
  {
    label: "Eat HEALTHY!",
    href: "/4",
    views: 701,
  },
  {
    label: "UFOs were sighted again!",
    href: "/5",
    views: 528,
  },
  {
    label: "Why Lions are Awesome? We have 102 reasons that prove it!",
    href: "/6",
    views: 369,
  },
  {
    label: "How to survive in a big city",
    href: "/7",
    views: 112,
  },
  {
    label: "AI solved another big problem",
    href: "/8",
    views: 96,
  },
  {
    label: "Eat HEALTHY! Always",
    href: "/9",
    views: 55,
  },
  {
    label: "UFOs were sighted again and again!",
    href: "/10",
    views: 9,
  },
];
const likesList = [
  {
    label: "Why Lions are Awesome? We have 101 reasons that prove it!",
    href: "/1",
    likes: 953,
    views: 0,
  },
  {
    label: "How to survive in a huge city",
    href: "/2",
    likes: 823,
  },
  {
    label: "AI solved another major problem",
    href: "/3",
    likes: 736,
  },
  {
    label: "Eat HEALTHY!",
    href: "/4",
    likes: 701,
  },
  {
    label: "UFOs were sighted again!",
    href: "/5",
    likes: 528,
  },
  {
    label: "Why Lions are Awesome? We have 102 reasons that prove it!",
    href: "/6",
    likes: 369,
  },
  {
    label: "How to survive in a big city",
    href: "/7",
    likes: 112,
  },
  {
    label: "AI solved another big problem",
    href: "/8",
    likes: 96,
  },
  {
    label: "Eat HEALTHY! always",
    href: "/9",
    likes: 55,
  },
  {
    label: "UFOs were sighted again and again!",
    href: "/10",
    likes: 9,
  },
];
const authorsList = [
  { label: "ChatGPT", href: "/1", posts: 45 },
  { label: "Default user", href: "/2", posts: 39 },
  { label: "Stephen King", href: "/3", posts: 32 },
  { label: "VSBroN", href: "/4", posts: 29 },
  { label: "AnnonWriter", href: "/5", posts: 25 },
  { label: "Gurst", href: "/6", posts: 24 },
  { label: "GRRM", href: "/7", posts: 15 },
  { label: "The Blogger", href: "/8", posts: 11 },
  { label: "Unknown user", href: "/9", posts: 8 },
  { label: "User413594", href: "/10", posts: 2 },
];

function IndexStats() {
  // Returned JSX
  return (
    <section className="pb-8">
      <SectionTitle as="h2">Top Posts & Users</SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 lg:gap-x-6 gap-y-6">
        <StatsCard list={viewsList} title="Most viewed posts" />
        <StatsCard
          list={likesList}
          title="Most liked posts"
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
  // Classes for icons
  const iconClass = "!w-5 !h-5 stroke-primary";
  const iconClassSm = "!w-4 !h-4 stroke-primary";

  // Returned JSX
  return (
    <Card
      className={`gap-0 py-4 xs:py-6 px-6 truncate max-w-[450px] ${className}`}
    >
      <CardHeader className="text-xl font-poppins border-b-2 border-accent px-0 mb-3 flex items-center gap-x-2 pb-2">
        {list[0].views ? <EyeIcon className={iconClass} /> : ""}
        {list[0].likes ? <ThumbsUpIcon className={iconClass} /> : ""}
        {list[0].posts ? <FilePenLine className={iconClass} /> : ""}
        {title}
      </CardHeader>
      <CardContent className="px-0">
        <ul className="!pl-0 flex flex-col gap-1 text-sm lg:text-base">
          {list.map(({ label, href, posts, views, likes }) => (
            <li
              key={href}
              className="flex justify-between items-center gap-x-4"
            >
              <Link href={href} className="link-primary single-line-preview">
                {label}
              </Link>
              <div className="flex items-center gap-1 text-foreground/60 font-bold text-sm min-w-11">
                {views ? <EyeIcon className={iconClassSm} /> : ""}
                {likes ? <ThumbsUpIcon className={iconClassSm} /> : ""}
                {posts ? <FilePenLine className={iconClassSm} /> : ""}
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
