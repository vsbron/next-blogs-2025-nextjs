/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import db from "../db";
import { fetchCurrentUserId } from "./users";

// Action function to create a new post
export const createPostAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  // Get the current user Id
  const user = await fetchCurrentUserId();

  try {
    const title = formData.get("title") as string;
    const preview = formData.get("preview") as string;
    const text = formData.get("text") as string;

    // Temp
    const image = formData.get("imageUrl") as File;

    // Create post in the database
    await db.post.create({
      data: {
        title: title,
        preview: preview,
        text: text,
        authorId: user.id,
        imageUrl:
          "https://hips.hearstapps.com/hmg-prod/images/dutch-colonial-house-style-66956274903da.jpg",
      },
    });

    return { message: "Post successfully created" };
  } catch {
    return { message: "There was an error" };
  }
};
