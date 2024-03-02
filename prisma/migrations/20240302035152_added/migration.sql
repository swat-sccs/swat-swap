/*
  Warnings:

  - You are about to drop the column `field` on the `Listing` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Listing" DROP COLUMN "field",
ADD COLUMN     "image" BYTEA[];
