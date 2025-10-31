"use server";
import db from "../db";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

// Common function that gets clerkId of current user and returns his ID
export const fetchCurrentUserId = async () => {
  // Get the current user clerkId
  const { userId: clerkId } = await auth();
  if (!clerkId) redirect("/");

  // Fetch user id
  const fetchedUser = await db.user.findUnique({
    where: { clerkId },
    select: { id: true },
  });

  // Guard clause
  if (!fetchedUser) throw new Error("User not found");

  // Return user id
  return fetchedUser.id;
};
