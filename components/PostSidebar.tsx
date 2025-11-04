import { formatDate, getReadingTime } from "@/utils/helpers";
import { Post } from "@/utils/types";
import { Card } from "./ui/card";

function PostSidebar({ post }: { post: Post }) {
  // Destructure post
  const { text, preview, published, updated } = post;

  // Returned JSX
  return (
    <aside>
      <Card className="pt-5 pb-6 px-7 gap-y-0.5">
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
      </Card>
    </aside>
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
    <div className="mb-6 text-lg">
      <div className="font-poppins text-xl">Preview:</div>
      {children}
    </div>
  );
}

export default PostSidebar;
