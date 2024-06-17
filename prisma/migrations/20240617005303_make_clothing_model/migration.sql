/*
  Warnings:

  - You are about to drop the column `apparel` on the `Listing` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Apparel_Gender" AS ENUM ('women', 'men', 'unisex');

-- AlterTable
ALTER TABLE "Listing" DROP COLUMN "apparel";

-- DropEnum
DROP TYPE "Apparel";

-- CreateTable
CREATE TABLE "Clothing" (
    "listingId" INTEGER NOT NULL,
    "apparelSize" "Apparel_Size" NOT NULL,
    "apparelGender" "Apparel_Gender" NOT NULL,

    CONSTRAINT "Clothing_pkey" PRIMARY KEY ("listingId")
);

-- AddForeignKey
ALTER TABLE "Clothing" ADD CONSTRAINT "Clothing_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "Listing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
