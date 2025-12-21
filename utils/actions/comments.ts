"use server";
import db from "../db";

// Action function that fetches all post comments
export const fetchPostComments = async (id: number) => {
  // Fetch the comments using post id
  const comments = await db.comment.findMany({
    where: { postId: id },
  });

  // Return post
  return comments;
};

// Action function that increases the views count
export const incrementPostComment = async (id: number) => {
  // Create post in the database
  await db.post.update({
    where: { id: id },
    data: {
      commentsCount: { increment: 1 },
    },
  });
};
