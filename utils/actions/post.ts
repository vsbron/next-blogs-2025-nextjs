"use server";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import db from "../db";
import { imageSchema, postSchema } from "../schemas";
import { validatedWithZodSchema } from "../schemaFunctions";
import { actionReturnType } from "../types";
import { renderError } from "../helpers";
import { uploadImage } from "../supabase";

// Action function to create a new post
export const createPostAction = async (
  formData: FormData
): actionReturnType => {
  // Get the current user clerkId
  const { userId } = await auth();
  if (!userId) redirect("/");

  try {
    // Get all the form data and validate it
    const rawData = Object.fromEntries(formData);
    const validatedFields = validatedWithZodSchema(postSchema, rawData);

    // Get the image from formData
    const file = formData.get("imageUrl") as File;

    // Validate the image file
    const validatedImage = validatedWithZodSchema(imageSchema, {
      imageUrl: file,
    });

    // Upload the image and get the full path
    const fullPath = await uploadImage(validatedImage.imageUrl);

    // Create post in the database
    await db.post.create({
      data: {
        ...validatedFields,
        imageUrl: fullPath,
        authorId: userId,
      },
    });

    // Return success message
    return { success: true, message: "Post successfully created" };
  } catch (err) {
    return renderError(err, "creating a post");
  }
};

// Action function that increases the views count
export const incrementPostView = async (id: number) => {
  // Create post in the database
  await db.post.update({
    where: { id: id },
    data: {
      views: { increment: 1 },
    },
  });
};

// Action function that increases the likes count
export const togglePostLike = async (postId: number, userId: string) => {
  const existing = await db.like.findUnique({
    where: { userId_postId: { userId, postId } },
  });

  if (existing) {
    await db.like.delete({ where: { userId_postId: { userId, postId } } });
    return { liked: false };
  } else {
    await db.like.create({ data: { userId, postId } });
    return { liked: true };
  }
};
