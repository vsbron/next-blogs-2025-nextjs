import { Dispatch, SetStateAction } from "react";

import DeleteComment from "@/components/Comments/DeleteComment";
import EditComment from "@/components/Comments/EditComment";

// Props type
type CommentButtonsProps = {
  id: number;
  postId: number;
  text: string;
  activeAction: {
    commentId: number;
    type: "edit" | "delete";
  } | null;
  setActiveAction: Dispatch<
    SetStateAction<{
      commentId: number;
      type: "edit" | "delete";
    } | null>
  >;
};

// The component
function CommentButtons({
  id,
  postId,
  text,
  activeAction,
  setActiveAction,
}: CommentButtonsProps) {
  // Returned JSX
  return (
    <div className="font-normal flex flex-col xs:flex-row gap-0.5 xs:gap-3 items-end xs:items-center justify-end text-xs xs:text-sm ">
      <EditComment
        commentId={id}
        postId={postId}
        text={text}
        isOpen={activeAction?.commentId === id && activeAction?.type === "edit"}
        onOpen={() => setActiveAction({ commentId: id, type: "edit" })}
        onClose={() => setActiveAction(null)}
      />
      <DeleteComment
        commentId={id}
        postId={postId}
        isOpen={
          activeAction?.commentId === id && activeAction?.type === "delete"
        }
        onOpen={() => setActiveAction({ commentId: id, type: "delete" })}
        onClose={() => setActiveAction(null)}
      />
    </div>
  );
}

export default CommentButtons;
