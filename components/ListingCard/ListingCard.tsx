import { minioListingImagesEndpoint } from "@/config";
import { Listing } from "@/dtos";
import Image from "next/image";
import Link from "next/link";
import React, { ReactElement } from "react";
// import text from R

interface ListingCardProps {
  listing: Listing;
  header: ReactElement;
  footer: ReactElement;
}

export const ListingCard = ({ listing, header, footer }: ListingCardProps) => {
  return (
    <Link href={`listing/${listing.id}`}>
      <div className="flex flex-col p-4 shadow-md rounded-lg h-fit gap-y-2 cursor-pointer">
        {header}

        {listing.images.map((image) => (
          <div className="flex items-center">
          <div className="relative h-14 w-14 lg:h-20 lg:w-20 pr-2 lg:pr-3 overflow-clip rounded-md">
            <Image
              // src={"https://www.swarthmore.edu/sites/default/files/styles/headshot/public/assets/images/user_photos/cmurphy4.jpg.webp"}
              alt="listing image featuring a product/service"
              fill
              className="relative object-cover overflow-clip"
              sizes="(max-width: 768px) 30vw, (max-width: 1200px) 20vw, 15vw"
              loading={"lazy"}
              src={`${minioListingImagesEndpoint}/${image.fileName}`}
            />
          </div>
        </div>
        ))}

        {footer}
      </div>
    </Link>
  );
};
