import { PrismaClient } from "@prisma/client";

// Create prisma client singleton
const prismaClientSingleton = () => {
  return new PrismaClient();
};

// Set the type
type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;


const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

// Export prism
export default prisma;

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
 