/*
  Warnings:

  - You are about to drop the column `color` on the `Listing` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Listing" DROP COLUMN "color";

-- DropEnum
DROP TYPE "Color";
