/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import db from "../db";
import { postSchema } from "../schemas";
import { validatedWithZodSchema } from "../schemaFunctions";
import { actionReturnType } from "../types";
import { renderError } from "../helpers";

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

    return { success: true, message: "Post successfully created" };
  } catch (err) {
    return renderError(err, "creating a post");
  }
};
