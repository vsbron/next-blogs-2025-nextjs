import { Webhook } from "svix";
import { headers } from "next/headers";
import { PrismaClient } from "@prisma/client";
import type { WebhookEvent } from "@clerk/nextjs/server";

// Create Prisma client
const prisma = new PrismaClient();

export async function POST(req: Request) {
  // Get the payload and headers
  const payload = await req.text();
  const heads = await headers();

  // Extract Svix headers
  const svix_id = heads.get("svix-id");
  const svix_timestamp = heads.get("svix-timestamp");
  const svix_signature = heads.get("svix-signature");
  if (!svix_id || !svix_timestamp || !svix_signature)
    return new Response("Missing svix headers", { status: 400 });

  // Create the Svix verifier
  const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET!);

  // Verify with svix
  let evt: WebhookEvent;
  try {
    evt = wh.verify(payload, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("❌ Webhook verification failed:", err);
    return new Response("Invalid signature", { status: 400 });
  }

  // Handle user created event
  if (evt.type === "user.created") {
    // Get the event data
    const u = evt.data;

    await prisma.user.create({
      data: {
        clerkId: u.id,
        email:
          u.email_addresses?.[0]?.email_address ??
          u.external_accounts?.[0]?.email_address ??
          "",
        displayName:
          [u.first_name, u.last_name].filter(Boolean).join(" ") ||
          "Unnamed user",
        username: `User${Math.floor(Date.now() / 1000)}`,
        imageUrl: u.image_url,
        gender: "Unknown",
        website: "",
        facebook: "",
        x: "",
        instagram: "",
        reddit: "",
      },
    });
  }

  // Handle user deleted event
  if (evt.type === "user.deleted") {
    const u = evt.data;
    await prisma.user.delete({
      where: { clerkId: u.id },
    });
  }

  // Return the response
  return new Response("OK", { status: 200 });
}
