import DeleteComment from "@/components/Comments/DeleteComment";
import EditComment from "@/components/Comments/EditComment";

// Props type
type CommentButtonsProps = {
  id: number;
  postId: number;
  text: string;
};

// The component
function CommentButtons({ id, postId, text }: CommentButtonsProps) {
  // Returned JSX
  return (
    <div className="font-normal flex flex-col xs:flex-row gap-0.5 xs:gap-3 items-end xs:items-center justify-end text-xs xs:text-sm ">
      <EditComment commentId={id} postId={postId} text={text} />
      <DeleteComment commentId={id} postId={postId} />
    </div>
  );
}

export default CommentButtons;
