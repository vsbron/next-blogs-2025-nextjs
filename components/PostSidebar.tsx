import PostShare from "@/components/PostShare";
import PostStats from "@/components/PostStats";
import { Card } from "@/components//ui/card";

import { Post } from "@/utils/types";

function PostSidebar({ post }: { post: Post }) {
  // Returned JSX
  return (
    <aside className="flex flex-col gap-y-8">
      <PostStats post={post} />
      <PostShare id={post.id} title={post.title} />
    </aside>
  );
}

// Helper components for exports
export function PostSidebarCard({ children }: { children: React.ReactNode }) {
  return <Card className="pt-5 pb-6 px-7 gap-y-0.5">{children}</Card>;
}
export function PostSidebarTitle({ title }: { title: string }) {
  return <div className="font-poppins text-xl mb-1">{title}</div>;
}

export default PostSidebar;
