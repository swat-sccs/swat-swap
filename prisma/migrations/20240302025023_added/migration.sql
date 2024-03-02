/*
  Warnings:

  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - Added the required column `condition` to the `Listing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paymentType` to the `Listing` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `category` on the `Listing` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('clothing_accessories', 'furniture_decor', 'school_supplies', 'books', 'electronics', 'sports_equipment', 'music_instruments', 'transportation', 'misc');

-- CreateEnum
CREATE TYPE "PaymentType" AS ENUM ('cash', 'paypal', 'zelle', 'venmo');

-- CreateEnum
CREATE TYPE "Condition" AS ENUM ('clothing_accessories', 'brand_new_unboxed', 'brand_new_openbox', 'like_new', 'lightly_used', 'well_loved', 'not_working', 'parts_missing');

-- CreateEnum
CREATE TYPE "Apparel" AS ENUM ('women', 'men', 'unisex');

-- CreateEnum
CREATE TYPE "Apparel_Size" AS ENUM ('xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl');

-- CreateEnum
CREATE TYPE "Color" AS ENUM ('light', 'dark', 'neutral', 'colorful', 'warm', 'cool');

-- AlterTable
ALTER TABLE "Listing" ADD COLUMN     "apparel" "Apparel",
ADD COLUMN     "color" "Color",
ADD COLUMN     "condition" "Condition" NOT NULL,
ADD COLUMN     "paymentType" "PaymentType" NOT NULL,
DROP COLUMN "category",
ADD COLUMN     "category" "Category" NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "password";
