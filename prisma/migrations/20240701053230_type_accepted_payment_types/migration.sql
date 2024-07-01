/*
  Warnings:

  - The `acceptedPaymentTypes` column on the `Listing` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Payment_Type" AS ENUM ('cash', 'paypal', 'zelle', 'venmo');

-- AlterTable
ALTER TABLE "Listing" DROP COLUMN "acceptedPaymentTypes",
ADD COLUMN     "acceptedPaymentTypes" "Payment_Type"[];
