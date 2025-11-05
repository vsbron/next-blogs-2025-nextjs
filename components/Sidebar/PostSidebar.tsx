import PostRecentPosts from "@/components/Sidebar/PostRecentPosts";
import PostShare from "@/components/Sidebar/PostShare";
import PostStats from "@/components/Sidebar/PostStats";
import { Card } from "@/components/ui/card";

import { Post } from "@/utils/types";

function PostSidebar({ post }: { post: Post }) {
  // Returned JSX
  return (
    <aside className="flex flex-col gap-y-6 lg:gap-y-8">
      <div className="hidden md:block">
        <PostStats post={post} />
      </div>
      <div className="-mt-8 md:mt-0">
        <PostShare id={post.id} title={post.title} />
      </div>
      <div className="-mt-8 md:mt-0">
        <PostRecentPosts />
      </div>
    </aside>
  );
}

// Helper components for exports
export function PostSidebarCard({ children }: { children: React.ReactNode }) {
  return (
    <Card className="pt-2 pb-2.5 md:pt-4 md:pb-5 lg:pt-5 lg:pb-6 px-4 xs:px-5 md:pl-6 lg:px-7 gap-y-0 md:gap-y-0.5 mb-4 md:mb-0 text-sm lg:text-base">
      {children}
    </Card>
  );
}
export function PostSidebarTitle({ title }: { title: string }) {
  return (
    <div className="font-poppins text-lg md:text-xl mb-0.5 md:mb-1">
      {title}
    </div>
  );
}

export default PostSidebar;
