export const POST = async (req: Request) => {
  const { PrismaClient } = await import("@prisma/client");
  const prisma = new PrismaClient();

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
