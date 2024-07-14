/*
  Warnings:

  - The values [clothing_accessories,furniture_decor,music_instruments] on the enum `Category` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Category_new" AS ENUM ('clothing', 'furniture', 'school_supplies', 'books', 'electronics', 'sports_equipment', 'musical_instrument', 'transportation', 'misc');
ALTER TABLE "Listing" ALTER COLUMN "category" TYPE "Category_new" USING ("category"::text::"Category_new");
ALTER TYPE "Category" RENAME TO "Category_old";
ALTER TYPE "Category_new" RENAME TO "Category";
DROP TYPE "Category_old";
COMMIT;
