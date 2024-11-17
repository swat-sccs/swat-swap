-- CreateEnum
CREATE TYPE "Type" AS ENUM ('selling', 'service');

-- CreateEnum
CREATE TYPE "firmonprice" AS ENUM ('yes', 'no');

-- CreateEnum
CREATE TYPE "Category" AS ENUM ('clothing', 'furniture', 'school_supplies', 'books', 'electronics', 'sports_equipment', 'musical_instrument', 'transportation', 'misc');

-- CreateEnum
CREATE TYPE "PaymentType" AS ENUM ('cash', 'paypal', 'zelle', 'venmo');

-- CreateEnum
CREATE TYPE "Condition" AS ENUM ('clothing_accessories', 'brand_new_unboxed', 'brand_new_openbox', 'like_new', 'lightly_used', 'well_loved', 'not_working', 'parts_missing');

-- CreateEnum
CREATE TYPE "Apparel_Gender" AS ENUM ('women', 'men', 'unisex');

-- CreateEnum
CREATE TYPE "Apparel_Size" AS ENUM ('xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl');

-- CreateEnum
CREATE TYPE "Payment_Type" AS ENUM ('cash', 'paypal', 'zelle', 'venmo', 'cashapp');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "keycloakId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "displayName" TEXT NOT NULL DEFAULT '',
    "biography" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ListingImage" (
    "id" SERIAL NOT NULL,
    "bucketName" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "checksum" TEXT NOT NULL,
    "listingId" INTEGER NOT NULL,

    CONSTRAINT "ListingImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Listing" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "type" "Type" NOT NULL,
    "firmonprice" "firmonprice" NOT NULL,
    "description" TEXT NOT NULL,
    "acceptedPaymentTypes" "Payment_Type"[],
    "condition" "Condition" NOT NULL,
    "category" "Category" NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Listing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FavoriteListing" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "listingId" INTEGER NOT NULL,
    "savedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FavoriteListing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Clothing" (
    "listingId" INTEGER NOT NULL,
    "apparelSize" "Apparel_Size" NOT NULL,
    "apparelGender" "Apparel_Gender" NOT NULL,

    CONSTRAINT "Clothing_pkey" PRIMARY KEY ("listingId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_keycloakId_key" ON "User"("keycloakId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "FavoriteListing_userId_listingId_key" ON "FavoriteListing"("userId", "listingId");

-- AddForeignKey
ALTER TABLE "ListingImage" ADD CONSTRAINT "ListingImage_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "Listing"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Listing" ADD CONSTRAINT "Listing_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavoriteListing" ADD CONSTRAINT "FavoriteListing_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavoriteListing" ADD CONSTRAINT "FavoriteListing_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "Listing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Clothing" ADD CONSTRAINT "Clothing_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "Listing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
