/*
  Warnings:

  - Added the required column `firmonprice` to the `Listing` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "firmonprice" AS ENUM ('yes', 'no');

-- AlterTable
ALTER TABLE "Listing" ADD COLUMN     "firmonprice" "firmonprice" NOT NULL;
