/*
  Warnings:

  - You are about to drop the column `paymentTypes` on the `Listing` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Listing" DROP COLUMN "paymentTypes",
ADD COLUMN     "acceptedPaymentTypes" TEXT[];
