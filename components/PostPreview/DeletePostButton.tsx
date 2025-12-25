"use client";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";

import { useModal } from "@/components/ModalContext";
import { ButtonsContainer } from "@/components/form/Buttons";
import { Button } from "@/components/ui/button";

import { deletePostAction } from "@/utils/actions/post";

import { Trash2Icon, XIcon } from "lucide-react";

function DeletePostButton({ postId }: { postId: number }) {
  // Get modal functions from context
  const { onClose, onOpen, isOpen } = useModal();

  // Get the query client
  const queryClient = useQueryClient();

  // Delete post handler
  const deletePostHandler = async () => {
    // Delete the post, display the message invalidate query
    const result = await deletePostAction(postId);
    toast(result.message);
    queryClient.invalidateQueries({ queryKey: ["user-posts"] });
    onClose();
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
        onClick={() => onOpen(postId, "delete")}
      >
        {isOpen(postId, "delete") ? (
          <XIcon className={icon} />
        ) : (
          <Trash2Icon className={icon} />
        )}
      </Button>
      {isOpen(postId, "delete") && (
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
              onClick={onClose}
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
