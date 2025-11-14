"use server";
import { cache } from "react";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs/server";

import db from "../db";
import { userSchema } from "../schemas";
import { validatedWithZodSchema } from "../schemaFunctions";
import { renderError } from "../helpers";
import { PostPreview } from "../types";

// Server action function that returns user based on clerkID
export async function fetchCurrentUser() {
  // Get current user ID
  const { userId } = await auth();

  // Guard clause
  if (!userId) return null;

  // Fetch the user from database
  const user = await db.user.findUnique({
    where: { clerkId: userId },
    select: {
      clerkId: true,
      imageUrl: true,
      username: true,
      displayName: true,
      email: true,
      dateCreated: true,
      birthday: true,
      gender: true,
      country: true,
      bio: true,
      website: true,
      facebook: true,
      x: true,
      instagram: true,
      reddit: true,
    },
  });

  // Return user
  return user;
}

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

// Fetch user by his username
export const fetchUser = cache(async (username: string) => {
  // Fetch the user using its ID
  const user = await db.user.findUnique({
    where: { username: username },
  });

  // Return user
  return user;
});

// User's stats action function type
export type UserStats = {
  totalPosts: number;
  totalViews: number;
  mostPopularPost: PostPreview | null;
};

// Server action function that collects user's stats
export async function fetchUserStats(
  userId?: string
): Promise<UserStats | null> {
  // Get current user ID if not provided
  if (!userId) {
    const { userId: authUserId } = await auth();
    if (!authUserId) return null;
    userId = authUserId;
  }

  // Aggregate counts: posts, total views
  const postsAggregate = await db.post.aggregate({
    where: { authorId: userId },
    _count: { id: true },
    _sum: { views: true },
  });

  // Fetch only the top post by views
  const mostPopularPost = await db.post.findFirst({
    where: { authorId: userId },
    orderBy: {
      likes: {
        _count: "desc",
      },
    },
    select: {
      id: true,
      title: true,
      preview: true,
      imageUrl: true,
      published: true,
      views: true,
      category: true,
      likes: { select: { id: true } },
    },
  });

  // Return total posts, views and most viewed post
  return {
    totalPosts: postsAggregate._count.id,
    totalViews: postsAggregate._sum.views || 0,
    mostPopularPost,
  };
}
