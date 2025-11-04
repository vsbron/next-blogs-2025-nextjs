import { formatDate, getReadingTime } from "@/utils/helpers";
import { Post } from "@/utils/types";

function PostSidebar({ post }: { post: Post }) {
  // Destructure post
  const { text, preview, published, updated } = post;

  // Returned JSX
  return (
    <aside>
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
    </aside>
  );
}

// Helper components
function SidebarLine({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
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
    <div className="mb-6 text-lg">
      <div className="font-poppins text-xl">Preview:</div>
      {children}
    </div>
  );
}

export default PostSidebar;
