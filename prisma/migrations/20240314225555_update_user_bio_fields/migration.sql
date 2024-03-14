/*
  Warnings:

  - You are about to drop the column `displayName` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "displayName",
ADD COLUMN     "displayname" TEXT NOT NULL DEFAULT '',
ALTER COLUMN "biography" SET DEFAULT '';
