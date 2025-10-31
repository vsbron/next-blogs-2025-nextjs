"use server";
import { revalidatePath } from "next/cache";
import { auth, currentUser } from "@clerk/nextjs/server";

import db from "../db";
import { userSchema } from "../schemas";
import { redirect } from "next/navigation";

// Server action function that returns user based on clerkID
export async function fetchCurrentUser(clerkId: string) {
  // Guard clause
  if (!clerkId) return;

  // Fetch the user based on clerkID
  const user = await db.user.findUnique({ where: { clerkId } });

  // Return user
  return user;
}

export const fetchCurrentUserId = async () => {
  // Get the current user clerkId
  const { userId: clerkId } = await auth();
  if (!clerkId) redirect("/");

  // Fetch user id
  const fetchedUser = await db.user.findUnique({
    where: { clerkId },
    select: { id: true },
  });
  if (!fetchedUser) throw new Error("User not found");

  // Return user id
  return fetchedUser;
};

// Server action function that fetches users with most posts
export const fetchUsersWithMostPosts = async () => {
  const authors = await db.user.findMany({
    take: 10,
    orderBy: { posts: { _count: "desc" } },
    select: {
      id: true,
      username: true,
      _count: { select: { posts: true } },
    },
  });

  return authors;
};

// -----------------------------------------------

// Action function for updating the user
export async function updateUserAction(formData: FormData) {
  // Get the current user
  const sessionUser = await currentUser();
  if (!sessionUser) return;

  // Get the data from the form and parse it
  const data = Object.fromEntries(formData);
  const parsed = userSchema.safeParse(data);
  console.log(parsed);
  if (!parsed.success) return;

  // Remove empty or undefined fields to avoid overwriting
  const updateData = Object.fromEntries(
    Object.entries(parsed.data).filter(([_, v]) => v !== undefined && v !== "")
  );

  // Update the prisma
  await db.user.update({
    where: { clerkId: sessionUser!.id },
    data: updateData,
  });

  // Revalidate path
  revalidatePath("/dashboard/profile");
}
