import { PostSidebarCard, PostSidebarTitle } from "@/components/PostSidebar";
import { formatDate, getReadingTime } from "@/utils/helpers";
import { Post } from "@/utils/types";

function PostStats({ post }: { post: Post }) {
  // Destructure post
  const { text, preview, published, updated } = post;
  // Returned JSX
  return (
    <PostSidebarCard>
      <SidebarPreview>{preview}</SidebarPreview>
      <SidebarLine title="Published">
        <div>{formatDate(published)}</div>
      </SidebarLine>
      <SidebarLine title="Updated">
        <div>{formatDate(updated)}</div>
      </SidebarLine>
      <SidebarLine title="Reading time">
        <div>{getReadingTime(text)}</div>
      </SidebarLine>
    </PostSidebarCard>
  );
}

// Helper component prop type
type SidebarLineProps = {
  children: React.ReactNode;
  title: string;
};
// Helper components
function SidebarLine({ children, title }: SidebarLineProps) {
  // Returned JSX
  return (
    <div className="grid grid-cols-[125px_1fr] items-end">
      <div className="font-semibold">{title}:</div>
      {children}
    </div>
  );
}
function SidebarPreview({ children }: { children: React.ReactNode }) {
  // Returned JSX
  return (
    <div className="mb-3 text-lg">
      <PostSidebarTitle title="Preview" />
      {children}
    </div>
  );
}
export default PostStats;
