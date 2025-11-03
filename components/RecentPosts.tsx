import Link from "next/link";
import { ArrowRight } from "lucide-react";

import PostPreviewTile from "@/components/PostPreviewTile";
import PostsGridLayout from "@/components/PostsGridLayout";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";

import { fetchRecentPosts } from "@/utils/actions/posts";

async function RecentPosts() {
  // Fetch recent posts
  const posts = await fetchRecentPosts();

  // Returned JSX
  return (
    <section>
      <div className="flex items-center justify-between w-full mb-4">
        <SectionTitle as="h2" className="!mb-0">
          Recent posts
        </SectionTitle>
        <Button variant="outline" size="sm" asChild>
          <Link href="/posts" className="flex items-center gap-x-1">
            See all posts <ArrowRight className="!w-4 !h-4 mt-0.5" />
          </Link>
        </Button>
      </div>
      <PostsGridLayout>
        {posts.map((post) => (
          <PostPreviewTile post={post} key={post.id} />
        ))}
      </PostsGridLayout>
    </section>
  );
}

export default RecentPosts;
