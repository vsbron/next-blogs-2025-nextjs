import Link from "next/link";

import DeletePostButton from "@/components/PostPreview/DeletePostButton";
import { Button } from "@/components/ui/button";

import { EditIcon, EyeIcon } from "lucide-react";

function PostPreviewButtons({ postId }: { postId: number }) {
  // Returned JSX
  return (
    <div className="flex flex-col gap-y-1 ml-auto p-3 self-center w-14">
      <Button variant="outline" size="xs" aria-label="View post" asChild>
        <Link href={`/posts/${postId}`}>
          <EyeIcon className="post-stats-icon" />
        </Link>
      </Button>
      <Button variant="outline" size="xs" aria-label="Edit post" asChild>
        <Link href={`/dashboard/my-posts/edit/${postId}`}>
          <EditIcon className="post-stats-icon" />
        </Link>
      </Button>
      <DeletePostButton postId={postId} />
    </div>
  );
}
export default PostPreviewButtons;
