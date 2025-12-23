import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { Trash2Icon } from "lucide-react";
import { toast } from "sonner";
import { ButtonsContainer } from "../form/Buttons";
import { Button } from "../ui/button";
import { deleteCommentAction } from "@/utils/actions/comments";

function DeleteComment({ commentId }: { commentId: number }) {
  // Set state value for delete prompt
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const toggleIsDeleting = () => setIsDeleting((iD) => !iD);

  // Get the query client
  const queryClient = useQueryClient();

  // Delete comment handler
  const deleteCommentHandler = async () => {
    // Delete the post, display the message invalidate query
    const result = await deleteCommentAction(commentId);
    toast(result.message);
    queryClient.invalidateQueries({ queryKey: ["user-posts"] });
    setIsDeleting(false);
  };

  // Returned JSX
  return (
    <div className="relative">
      <span onClick={toggleIsDeleting}>
        <Trash2Icon className="w-4 h-4" /> Delete
      </span>
      {isDeleting && (
        <div className="border border-border rounded-md absolute bg-background px-3 py-2 bottom-8 right-0 text-xs w-38 text-right">
          Are you sure you want to delete this comment?
          <ButtonsContainer className="mt-2 gap-2 justify-end">
            <Button
              variant="destructive"
              size="xs"
              className="!text-xs"
              onClick={deleteCommentHandler}
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

export default DeleteComment;
