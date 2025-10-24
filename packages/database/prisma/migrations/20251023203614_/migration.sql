/*
  Warnings:

  - You are about to drop the column `instructorId` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the `Rubric` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Course" DROP CONSTRAINT "Course_instructorId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Rubric" DROP CONSTRAINT "Rubric_assignmentId_fkey";

-- AlterTable
ALTER TABLE "Course" DROP COLUMN "instructorId";

-- DropTable
DROP TABLE "public"."Rubric";

-- CreateTable
CREATE TABLE "Authentication" (
    "id" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "provider" TEXT NOT NULL,
    "providerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Authentication_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Authentication_provider_providerId_idx" ON "Authentication"("provider", "providerId");

-- AddForeignKey
ALTER TABLE "Authentication" ADD CONSTRAINT "Authentication_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
