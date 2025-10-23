import crypto from "crypto";

export const POST = async (req: Request) => {
  const { PrismaClient } = await import("@prisma/client");
  const prisma = new PrismaClient();

  const rawBody = await req.text();
  const signature = req.headers.get("clerk-signature");

  // verify webhook
  const hmac = crypto.createHmac("sha256", process.env.CLERK_WEBHOOK_SECRET!);
  hmac.update(rawBody);
  const expectedSignature = hmac.digest("hex");
  if (signature !== expectedSignature)
    return new Response("Invalid signature", { status: 400 });

  const event = JSON.parse(rawBody);

  if (event.type === "user.created") {
    const clerkUser = event.data;
    await prisma.user.create({
      data: {
        clerkId: clerkUser.id,
        email: clerkUser.email_addresses[0].email_address,
        name: clerkUser.first_name,
      },
    });
  }

  return new Response(null, { status: 200 });
};
