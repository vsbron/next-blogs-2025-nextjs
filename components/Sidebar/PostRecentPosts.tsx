import Link from "next/link";

import {
  PostSidebarCard,
  PostSidebarTitle,
} from "@/components/Sidebar/PostSidebar";

import { formatDate } from "@/utils/helpers";
import { fetchRecentPosts } from "@/utils/actions/posts";

async function PostRecentPosts() {
  // Get the recent posts
  const posts = await fetchRecentPosts();

  // Returned JSX
  return (
    <PostSidebarCard>
      <PostSidebarTitle title="Recent posts" />
      <div className="flex flex-col gap-y-2">
        {posts.map(({ id, title, published }) => (
          <div
            key={id}
            className="flex justify-between items-start gap-4 border-b border-border/40 pb-0.5"
          >
            <Link href={`/posts/${id}`} className="link-primary">
              {title}
            </Link>
            <div className="whitespace-nowrap text-sm lg:mt-0.5">
              {formatDate(published)}
            </div>
          </div>
        ))}
      </div>
    </PostSidebarCard>
  );
}

export default PostRecentPosts;
