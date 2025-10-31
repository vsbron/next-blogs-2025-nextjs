/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import db from "../db";
import { fetchCurrentUserId } from "./actionHelpers";
import { renderError } from "../helpers";

// Action function to create a new post
export const createPostAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  // Get the current user
  const userId = await fetchCurrentUserId();

  try {
    // Get the post main fields
    const title = formData.get("title") as string;
    const preview = formData.get("preview") as string;
    const text = formData.get("text") as string;

    // Temp
    // const image = formData.get("imageUrl") as File;
    const imageUrl =
      "https://hips.hearstapps.com/hmg-prod/images/dutch-colonial-house-style-66956274903da.jpg";

    // Create post in the database
    await db.post.create({
      data: {
        title,
        preview,
        text,
        imageUrl,
        authorId: userId,
      },
    });

    return { message: "Post successfully created" };
  } catch (err) {
    return renderError(err, "creating a post");
  }
};
