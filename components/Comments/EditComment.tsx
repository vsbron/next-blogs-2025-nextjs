import { useState } from "react";
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
};

// The component
function EditComment({ commentId, postId, text }: EditCommentProps) {
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

  // Set state value for delete prompt
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const toggleIsEditing = () => setIsEditing((iE) => !iE);

  // Get the query client
  const queryClient = useQueryClient();

  // Edit comment handler
  const onSubmit = async (data: FormValues) => {
    // Edit the comment, display the message invalidate query
    const result = await editCommentAction(commentId, data);
    toast(result.message);
    queryClient.invalidateQueries({ queryKey: ["comments", postId] });
    setIsEditing(false);
  };

  // Returned JSX
  return (
    <div
      className="relative flex gap-1 text-foreground/60 cursor-pointer hover:text-foreground/40 transition-colors"
      onClick={toggleIsEditing}
    >
      {isEditing ? (
        <>
          <XIcon className="w-4 h-4 relative top-0.25" /> Cancel
        </>
      ) : (
        <>
          <EditIcon className="w-4 h-4" /> Edit
        </>
      )}

      {isEditing && (
        <div
          className="border border-border rounded-md absolute bg-white px-4 py-2 bottom-8 right-0 text-xs w-[270px] text-foreground cursor-default"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="text-base mb-1">Edit your comment</div>
          <form onSubmit={handleSubmit(onSubmit)} className="basic-form gap-1">
            <input type="hidden" id="postId" {...register("postId")} />
            <Textarea
              id="commentText"
              className="resize-none"
              {...register("commentText")}
              placeholder="Write your comment here..."
            />

            {errors.commentText && (
              <span className="text-primary text-xs">
                {errors.commentText?.message}
              </span>
            )}

            <ButtonsContainer className="mt-2 gap-2 justify-end">
              <Button
                variant="destructive"
                size="xs"
                className="!text-xs"
                type="submit"
              >
                {isSubmitting ? "Saving..." : "Save"}
              </Button>
              <Button
                variant="outline"
                size="xs"
                className="!text-xs"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleIsEditing();
                }}
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
