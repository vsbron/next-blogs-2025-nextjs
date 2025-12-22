"use server";
import { auth } from "@clerk/nextjs/server";
import db from "../db";
import { redirect } from "next/navigation";
import { validatedWithZodSchema } from "../schemaFunctions";
import { commentSchema } from "../schemas";
import { revalidatePath } from "next/cache";
import { renderError } from "../helpers";

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
  console.log("here");

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
    await db.comment.create({
      data: { ...validatedFields, userId: userId },
    });

    // Revalidate path
    revalidatePath(`/posts/${rawData.postId}`);

    // Return success message
    return { success: true, message: "Comment added successfully" };
  } catch (err) {
    return renderError(err, "adding a comment");
  }
}

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
