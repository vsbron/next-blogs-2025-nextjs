/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { auth } from "@clerk/nextjs/server";
import db from "../db";
import { renderError } from "../helpers";
import { postSchema } from "../schemas";
import { redirect } from "next/navigation";

// Action function to create a new post
export const createPostAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  // Get the current user clerkId
  const { userId } = await auth();
  if (!userId) redirect("/");

  try {
    // Get all the form data and validate it
    const rawData = Object.fromEntries(formData);
    const validatedFields = postSchema.parse(rawData);

    // Temp
    // const image = formData.get("imageUrl") as File;
    const imageUrl =
      "https://hips.hearstapps.com/hmg-prod/images/dutch-colonial-house-style-66956274903da.jpg";

    // Create post in the database
    await db.post.create({
      data: {
        ...validatedFields,
        imageUrl,
        authorId: userId,
      },
    });

    return { message: "Post successfully created" };
  } catch (err) {
    return renderError(err, "creating a post");
  }
};
