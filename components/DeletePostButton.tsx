"use client";
import { useState } from "react";
import { toast } from "sonner";

import { ButtonsContainer } from "@/components/form/Buttons";
import { Button } from "@/components/ui/button";

import { deletePostAction } from "@/utils/actions/post";
import { Trash2Icon, XIcon } from "lucide-react";

function DeletePostButton({ postId }: { postId: number }) {
  // Set state value for delete prompt
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const toggleIsDeleting = () => setIsDeleting((iD) => !iD);

  // Delete post handler
  const deletePostHandler = async () => {
    // Delete the post and display the message
    const result = await deletePostAction(postId);
    toast(result.message);
    setIsDeleting(false);
  };

  // Set a class for icon
  const icon = "post-stats-icon cursor-pointer stroke-white";

  // Returned JSX
  return (
    <div className="relative">
      <Button
        variant="destructive"
        size="xs"
        aria-label="Delete post"
        onClick={toggleIsDeleting}
      >
        {isDeleting ? (
          <XIcon className={icon} />
        ) : (
          <Trash2Icon className={icon} />
        )}
      </Button>
      {isDeleting && (
        <div className="border border-border rounded-md absolute bg-background px-3 py-2 bottom-8 right-0 text-xs w-38 text-right">
          Are you sure you want to delete this post?
          <ButtonsContainer className="mt-2 gap-2 justify-end">
            <Button
              variant="destructive"
              size="xs"
              className="!text-xs"
              onClick={deletePostHandler}
            >
              Delete
            </Button>
            <Button
              variant="outline"
              size="xs"
              className="!text-xs"
              onClick={() => setIsDeleting(false)}
            >
              Cancel
            </Button>
          </ButtonsContainer>
        </div>
      )}
    </div>
  );
}

export default DeletePostButton;
