"use server";
import { currentUser } from "@clerk/nextjs/server";

import { userSchema } from "./schemas";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// Action function that returns user based on clerkID
export async function getUser(clerkId: string) {
  // Guard clause
  if (!clerkId) return;

  // Fetch the user based on clerkID
  const user = await prisma.user.findUnique({ where: { clerkId } });

  // Return user
  return user;
}

// Action function for updating the user
export async function updateUserAction(formData: FormData) {
  // Get the current user
  const sessionUser = await currentUser();
  if (!sessionUser) return;
  console.log("Session OK");

  // Get the data from the form and parse it
  const data = Object.fromEntries(formData);
  const parsed = userSchema.safeParse(data);
  console.log(parsed);
  if (!parsed.success) return;
  console.log("Data parsed OK");

  // Remove empty or undefined fields to avoid overwriting
  const updateData = Object.fromEntries(
    Object.entries(parsed.data).filter(([_, v]) => v !== undefined && v !== "")
  );
  console.log("Cleaned unchanged data OK");

  // Update the prisma
  await prisma.user.update({
    where: { clerkId: sessionUser!.id },
    data: updateData,
  });
  console.log("Update prisma OK");

  // Revalidate path
  revalidatePath("/dashboard/profile");
}
