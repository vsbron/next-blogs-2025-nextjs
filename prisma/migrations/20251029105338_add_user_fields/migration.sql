-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('Male', 'Female', 'Unknown');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "birthday" TEXT,
ADD COLUMN     "categories" TEXT[],
ADD COLUMN     "country" TEXT,
ADD COLUMN     "gender" "Gender" NOT NULL DEFAULT 'Unknown',
ADD COLUMN     "socials" JSONB;
