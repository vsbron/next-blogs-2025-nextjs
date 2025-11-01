"use server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs/server";

import db from "../db";
import { userSchema } from "../schemas";
import { validatedWithZodSchema } from "../schemaFunctions";
import { renderError } from "../helpers";

// Server action function that returns user based on clerkID
export async function fetchCurrentUser() {
  // Get current user ID
  const { userId } = await auth();

  // Guard clause
  if (!userId) redirect("/");

  // Fetch the user from database
  const user = await db.user.findUnique({ where: { clerkId: userId } });

  // Return user
  return user;
}

// Server action function that fetches users with most posts
export const fetchUsersWithMostPosts = async () => {
  const authors = await db.user.findMany({
    take: 10,
    orderBy: { posts: { _count: "desc" } },
    select: {
      displayName: true,
      username: true,
      _count: { select: { posts: true } },
    },
  });

  return authors;
};

// Action function for updating the user
export async function updateUserAction(formData: FormData) {
  // Get the current user clerkId
  const { userId } = await auth();
  if (!userId) redirect("/");
  try {
    // Get all the form data and validate it
    const rawData = Object.fromEntries(formData);
    const validatedFields = validatedWithZodSchema(userSchema, rawData);

    // Update the prisma
    await db.user.update({
      where: { clerkId: userId },
      data: validatedFields,
    });

    // Revalidate path
    revalidatePath("/dashboard/profile");

    // Return success message
    return { success: true, message: "User updated successfully" };
  } catch (err) {
    return renderError(err, "updating the user");
  }
}
