import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { ButtonsContainer } from "@/components/form/Buttons";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { editCommentAction } from "@/utils/actions/comments";
import { commentSchema } from "@/utils/schemas";
import { EditIcon, XIcon } from "lucide-react";

// Type for form values
type FormValues = {
  commentText: string;
  postId: number;
};

// Props type
type EditCommentProps = {
  commentId: number;
  postId: number;
  text: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

// The component
function EditComment({
  commentId,
  postId,
  text,
  isOpen,
  onOpen,
  onClose,
}: EditCommentProps) {
  // Initiate form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(commentSchema),
    mode: "onBlur",
    defaultValues: { postId, commentText: text },
  });

  // Get the query client
  const queryClient = useQueryClient();

  // Edit comment handler
  const onSubmit = async (data: FormValues) => {
    // Edit the comment, display the message invalidate query
    const result = await editCommentAction(commentId, data);
    toast(result.message);
    queryClient.invalidateQueries({ queryKey: ["comments", postId] });

    // Close pop up
    onClose();
  };

  // Returned JSX
  return (
    <div className="relative text-foreground/60 cursor-pointer hover:text-foreground/40 transition-colors">
      {isOpen ? (
        // prettier-ignore
        <div className="flex gap-1" onClick={onClose}>
          <XIcon className="w-3.5 h-3.5 xs:w-4 xs:h-4 relative top-0.25" /> Cancel
        </div>
      ) : (
        <div className="flex gap-1" onClick={onOpen}>
          <EditIcon className="w-3.5 h-3.5 xs:w-4 xs:h-4" /> Edit
        </div>
      )}

      {isOpen && (
        <div
          className="border border-border rounded-md absolute bg-background px-4 py-2 bottom-8 right-0 text-xs w-[270px] text-foreground cursor-default shadow-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="text-sm xs:text-base mb-1">Edit your comment</div>
          <form onSubmit={handleSubmit(onSubmit)} className="basic-form gap-1">
            <input type="hidden" id="postId" {...register("postId")} />
            <Textarea
              id="commentText"
              className="resize-none text-xs xs:text-base bg-white"
              {...register("commentText")}
              placeholder="Write your comment here..."
            />

            {errors.commentText && (
              <span className="text-primary text-xs">
                {errors.commentText?.message}
              </span>
            )}

            <ButtonsContainer className="mt-1 gap-2 justify-end flex-row">
              <Button
                size="xs"
                className="!text-xs"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Saving..." : "Save"}
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
          </form>
        </div>
      )}
    </div>
  );
}

export default EditComment;
