import Link from "next/link";

import PreviewTilesGrid from "../PreviewTilesGrid";
import SectionTitle from "../SectionTitle";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { EyeIcon, FilePenLine, ThumbsUpIcon } from "lucide-react";

// Dummy data
const viewsList = [
  {
    label: "Why Lions are Awesome? We have 101",
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
    label: "Why Lions are Awesome? We have 102",
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
    label: "Why Lions are Awesome? We have 101",
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
    label: "Why Lions are Awesome? We have 102",
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
      <SectionTitle as="h2">Stats columns</SectionTitle>
      <PreviewTilesGrid>
        <StatsCard list={viewsList} title="Most liked posts" />
        <StatsCard list={likesList} title="Most viewed posts" />
        <StatsCard list={authorsList} title="User with most posts" />
      </PreviewTilesGrid>
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
};

// Helper component
function StatsCard({ list, title }: StatsCardProps) {
  // Returned JSX
  return (
    <Card className="gap-0 px-6">
      <CardHeader className="text-xl font-poppins border-b-2 border-accent px-0 mb-3">
        {title}
      </CardHeader>
      <CardContent className="px-0">
        <ul className="!pl-0 flex flex-col gap-1 text-lg">
          {list.map(({ label, href, posts, views, likes }) => (
            <li
              key={label}
              className="flex justify-between items-center gap-x-4"
            >
              <Link href={href} className="link-primary">
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
