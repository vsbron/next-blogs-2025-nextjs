import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";

import { SubmitButton } from "@/components/form/Buttons";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

import { addCommentAction } from "@/utils/actions/comments";
import { handleFormAction } from "@/utils/helpers";
import { commentSchema } from "@/utils/schemas";
import { Comment } from "@/utils/types";

// Type for form values
type FormValues = {
  commentText: string;
  postId: number;
};

// Props type
type AddCommentFormProps = {
  defaultValues?: Comment;
  postId: number;
};

// The component
function AddCommentForm({ postId }: AddCommentFormProps) {
  // Initiate form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(commentSchema),
    mode: "onBlur",
    defaultValues: { postId },
  });

  // Get the queryClient
  const queryClient = useQueryClient();

  // On submit handler
  const onSubmit = async (data: FormValues) => {
    // Handle the form submission and redirect user if successful
    const result = await handleFormAction(addCommentAction, data);

    // If success, invalidate query
    if (result.success)
      queryClient.invalidateQueries({ queryKey: ["comments", postId] });
  };

  // Returned JSX
  return (
    <Card className="gap-0 py-3 sm:py-4 mb-6">
      <CardHeader className="max-sm:px-4 py-0 mb-1">
        <div className="text-lg">Add a new comment</div>
      </CardHeader>
      <CardContent className="py-0 max-sm:px-4 ">
        <form onSubmit={handleSubmit(onSubmit)} className="basic-form gap-3">
          <input type="hidden" id="postId" {...register("postId")} />
          <Textarea
            id="commentText"
            className="resize-none"
            {...register("commentText")}
            placeholder="Write your comment here..."
          />

          {errors.commentText && (
            <span className="text-primary text-sm">
              {errors.commentText?.message}
            </span>
          )}
          <SubmitButton
            className="self-start"
            size="sm"
            text="Add comment"
            isPending={isSubmitting}
          />
        </form>
      </CardContent>
    </Card>
  );
}

export default AddCommentForm;
