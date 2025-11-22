"use client";
import Link from "next/link";

import SectionTitle from "@/components/SectionTitle";
import SkeletonGeneralStats from "@/components/skeletons/SkeletonGeneralStats";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import useGeneralStats from "@/hooks/useGeneralStats";
import { EyeIcon, FilePenLine, ThumbsUp, User } from "lucide-react";

function GeneralStats() {
  // Get the featured posts
  const { data, isLoading, error } = useGeneralStats();

  // Error guard clause
  if (error)
    return <div>There was an error while getting the general stats data</div>;

  // Returned JSX
  return (
    <section className="pb-8">
      <SectionTitle as="h2">Top Posts & Users</SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 lg:gap-x-6 gap-y-6">
        {isLoading || !data ? (
          <SkeletonGeneralStats />
        ) : (
          <>
            <StatsCard list={data.viewedPosts} title="Most viewed posts" />
            <StatsCard
              list={data.likedPosts}
              title="Most liked posts"
              className="md:hidden lg:block"
            />
            <StatsCard list={data.mostPosts} title="Users with most posts" />
          </>
        )}
      </div>
    </section>
  );
}

// Helper Props type
type StatsCardProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  list: any[];
  title: string;
  className?: string;
};

// Helper component
function StatsCard({ list, title, className }: StatsCardProps) {
  // Classes for icons
  const iconClass = "!w-5 !h-5 stroke-primary";
  const iconClassSm = "!w-4 !h-4 stroke-primary";
  const isUser = list[0].username;

  // Returned JSX
  return (
    <Card
      className={`gap-0 py-4 xs:py-6 px-6 truncate max-w-[450px] ${className}`}
    >
      <CardHeader className="text-xl font-poppins border-b-2 border-accent px-0 mb-3 flex items-center gap-x-2 pb-2">
        {list[0].views ? <EyeIcon className={iconClass} /> : ""}
        {list[0].likesCount ? <ThumbsUp className={iconClass} /> : ""}
        {list[0]._count ? <User className={iconClass} /> : ""}
        {title}
      </CardHeader>
      <CardContent className="px-0">
        <ul className="!pl-0 text-sm lg:text-base grid grid-cols-[1fr_min-content] items-center gap-y-1 gap-x-4">
          {list.map(
            ({
              id,
              title,
              views,
              _count,
              likesCount,
              username,
              displayName,
            }) => (
              <li key={isUser ? username : id} className="contents">
                <Link
                  href={isUser ? `/authors/${username}` : `/posts/${id}`}
                  className="link-primary single-line-preview"
                >
                  {isUser ? displayName : title}
                </Link>
                <div className="flex items-center gap-1 text-foreground/60 font-bold text-sm">
                  {views ? <EyeIcon className={iconClassSm} /> : ""}
                  {likesCount ? <ThumbsUp className={iconClassSm} /> : ""}
                  {_count ? <FilePenLine className={iconClassSm} /> : ""}
                  {views || likesCount || _count.posts || 0}
                </div>
              </li>
            )
          )}
        </ul>
      </CardContent>
    </Card>
  );
}

export default GeneralStats;
