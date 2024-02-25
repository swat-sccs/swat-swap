/*
  Warnings:

  - You are about to drop the column `catgory` on the `Listing` table. All the data in the column will be lost.
  - Added the required column `category` to the `Listing` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Listing" DROP COLUMN "catgory",
ADD COLUMN     "category" TEXT NOT NULL;
