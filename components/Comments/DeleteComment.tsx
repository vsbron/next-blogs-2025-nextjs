import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { ButtonsContainer } from "@/components/form/Buttons";
import { Button } from "@/components/ui/button";

import { deleteCommentAction } from "@/utils/actions/comments";
import { Trash2Icon, XIcon } from "lucide-react";

// Props type
type DeleteCommentProps = {
  commentId: number;
  postId: number;
};

// The component
function DeleteComment({ commentId, postId }: DeleteCommentProps) {
  // Set state value for delete prompt
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [isBusy, setIsBusy] = useState<boolean>(false);
  const toggleIsDeleting = () => setIsDeleting((iD) => !iD);

  // Get the query client
  const queryClient = useQueryClient();

  // Delete comment handler
  const deleteCommentHandler = async () => {
    // Enable busy state
    setIsBusy(true);

    // Delete the comment, display the message invalidate query
    const result = await deleteCommentAction(commentId, postId);
    toast(result.message);
    queryClient.invalidateQueries({ queryKey: ["comments", postId] });

    // Disable all states
    setIsBusy(false);
    setIsDeleting(false);
  };

  // Returned JSX
  return (
    <div
      className="relative flex gap-1 text-destructive cursor-pointer hover:text-destructive/60 transition-colors"
      onClick={toggleIsDeleting}
    >
      {isDeleting ? (
        <>
          <XIcon className="w-4 h-4 relative top-0.25" /> Cancel
        </>
      ) : (
        <>
          <Trash2Icon className="w-4 h-4" /> Delete
        </>
      )}
      {isDeleting && (
        <div
          className="border border-border rounded-md absolute bg-background px-3 py-2 bottom-8 right-0 text-xs w-42 text-right text-foreground cursor-default"
          onClick={(e) => e.stopPropagation()}
        >
          Are you sure you want to delete this comment?
          <ButtonsContainer className="mt-2 gap-2 justify-end">
            <Button
              variant="destructive"
              size="xs"
              className="!text-xs"
              onClick={deleteCommentHandler}
              disabled={isBusy}
            >
              {isBusy ? "Deleting..." : "Delete"}
            </Button>
            <Button
              variant="outline"
              size="xs"
              className="!text-xs"
              onClick={toggleIsDeleting}
            >
              Cancel
            </Button>
          </ButtonsContainer>
        </div>
      )}
    </div>
  );
}

export default DeleteComment;
