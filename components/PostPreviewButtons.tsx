"use client";
import Link from "next/link";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { deletePostAction } from "@/utils/actions/post";
import { EditIcon, EyeIcon, Trash2Icon } from "lucide-react";

function PostPreviewButtons({ postId }: { postId: number }) {
  // Delete post handler
  const deletePostHandler = async () => {
    // Delete the post and display the message
    const result = await deletePostAction(postId);
    toast(result.message);
  };

  // Returned JSX
  return (
    <div className="flex flex-col gap-y-1 ml-auto p-3 self-center w-15">
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
      <Button
        variant="destructive"
        size="xs"
        aria-label="Delete post"
        onClick={deletePostHandler}
      >
        <Trash2Icon className="post-stats-icon cursor-pointer stroke-white" />
      </Button>
    </div>
  );
}

export default PostPreviewButtons;
