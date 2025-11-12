/*
  Warnings:

  - You are about to drop the column `socials` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "socials",
ADD COLUMN     "facebook" TEXT,
ADD COLUMN     "instagram" TEXT,
ADD COLUMN     "reddit" TEXT,
ADD COLUMN     "website" TEXT,
ADD COLUMN     "x" TEXT;
