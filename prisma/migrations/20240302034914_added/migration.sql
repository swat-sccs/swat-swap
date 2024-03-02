/*
  Warnings:

  - You are about to drop the column `imagefile` on the `Listing` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Listing" DROP COLUMN "imagefile",
ADD COLUMN     "field" BYTEA[];
