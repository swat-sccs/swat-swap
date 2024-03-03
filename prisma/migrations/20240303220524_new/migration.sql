/*
  Warnings:

  - The `apparel` column on the `Listing` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `color` column on the `Listing` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `paymentType` column on the `Listing` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `category` column on the `Listing` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Made the column `condition` on table `Listing` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Listing" ADD COLUMN     "size" TEXT[],
DROP COLUMN "apparel",
ADD COLUMN     "apparel" TEXT[],
DROP COLUMN "color",
ADD COLUMN     "color" TEXT[],
ALTER COLUMN "condition" SET NOT NULL,
DROP COLUMN "paymentType",
ADD COLUMN     "paymentType" TEXT[],
DROP COLUMN "category",
ADD COLUMN     "category" TEXT[];
