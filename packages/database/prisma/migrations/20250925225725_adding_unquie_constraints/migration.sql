/*
  Warnings:

  - A unique constraint covering the columns `[title,courseId]` on the table `Announcement` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title,courseId]` on the table `Assignment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,courseId]` on the table `Enrollment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,assignmentId]` on the table `Submission` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Announcement_title_courseId_key" ON "public"."Announcement"("title", "courseId");

-- CreateIndex
CREATE UNIQUE INDEX "Assignment_title_courseId_key" ON "public"."Assignment"("title", "courseId");

-- CreateIndex
CREATE UNIQUE INDEX "Enrollment_userId_courseId_key" ON "public"."Enrollment"("userId", "courseId");

-- CreateIndex
CREATE UNIQUE INDEX "Submission_userId_assignmentId_key" ON "public"."Submission"("userId", "assignmentId");
