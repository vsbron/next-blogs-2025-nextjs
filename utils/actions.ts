"use server";
import prisma from "@/lib/prisma";

// Action function that returns user based on clerkID
export async function getUser(clerkId: string) {
  // Guard clause
  if (!clerkId) return;

  // Fetch the user based on clerkID
  const user = await prisma.user.findUnique({ where: { clerkId } });

  // Return user
  return user;
}
