"use server";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

import db from "@/utils/db";
import { renderError } from "@/utils/helpers";
import { validatedWithZodSchema } from "@/utils/schemaFunctions";
import { commentSchema } from "@/utils/schemas";
import { actionReturnType } from "@/utils/types";

// Action function that fetches all post comments
export const fetchPostComments = async (id: number) => {
  // Fetch the comments using post id
  const comments = await db.comment.findMany({
    where: { postId: id },
    include: {
      user: {
        select: {
          clerkId: true,
          username: true,
          displayName: true,
          imageUrl: true,
        },
      },
    },
    orderBy: { commentedTime: "asc" },
  });

  // Return post
  return comments;
};

// Action function for adding a comment
export async function addCommentAction(formData: FormData) {
  // Get the current user clerkId
  const { userId } = await auth();
  if (!userId) redirect("/dashboard");

  try {
    // Get all the form data and validate it
    const rawData = Object.fromEntries(formData);
    const parsedData = {
      ...rawData,
      postId: Number(rawData.postId),
    };
    const validatedFields = validatedWithZodSchema(commentSchema, parsedData);

    // Update the prisma
    await Promise.all([
      db.comment.create({ data: { ...validatedFields, userId: userId } }),
      db.post.update({
        where: { id: parsedData.postId },
        data: { commentsCount: { increment: 1 } },
      }),
    ]);

    // Return success message
    return { success: true, message: "Comment added successfully" };
  } catch (err) {
    return renderError(err, "adding a comment");
  }
}

// Action function to delete a comment
export const deleteCommentAction = async (
  commentId: number
): actionReturnType => {
  // Get the current user clerkId
  const { userId } = await auth();
  if (!userId) redirect("/");

  // Fetch the comment to check ownership
  const comment = await db.comment.findUnique({
    where: { id: commentId },
    select: { userId: true },
  });

  // Guard clauses
  if (!comment) return { success: false, message: "Comment not found" };
  if (comment.userId !== userId)
    return { success: false, message: "Unauthorized" };

  try {
    // Delete comment from the database
    await db.comment.delete({
      where: { id: commentId },
    });

    // Return success message
    return { success: true, message: "Comment successfully deleted" };
  } catch (err) {
    return renderError(err, "deleting a comment");
  }
};
