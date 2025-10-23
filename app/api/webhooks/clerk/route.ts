// app/api/webhooks/clerk/route.ts
import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const prisma =
  global.prisma ?? new PrismaClient({ log: ["query", "error", "warn"] });

if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export const POST = async (req: Request) => {
  try {
    const rawBody = await req.text();
    const event = JSON.parse(rawBody);
    console.log("Webhook received:", event);

    if (event.type === "user.created") {
      const clerkUser = event.data;
      await prisma.user.create({
        data: {
          clerkId: clerkUser.id,
          email: clerkUser.email_addresses?.[0]?.email_address ?? "",
          name: clerkUser.first_name ?? "",
        },
      });
      console.log(`User created in DB: ${clerkUser.id}`);
    }

    return new Response("OK", { status: 200 });
  } catch (err) {
    console.error("Webhook error:", err);
    return new Response("Server error", { status: 500 });
  }
};
