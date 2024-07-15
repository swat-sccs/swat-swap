import { listingImagesBucketName, minioHostname, minioPort } from "@/config";
import { Listing } from "@/dtos";
import Image from "next/image";
import React, { ReactElement } from "react";

interface ListingCardProps {
  listing: Listing;
  header: ReactElement;
  footer: ReactElement;
}

export const ListingCard = ({ listing, header, footer }: ListingCardProps) => {
  return (
    <div className="flex flex-col p-4 shadow-md rounded-lg h-fit gap-y-2">
      {header}

      {listing.images.map((image) => (
        <div
          key={image.id}
          className="flex flex-col relative min-w-64 min-h-64 p-8 overflow-hidden"
        >
          <Image
            fill={true}
            className="object-cover"
            src={`http://${minioHostname}:${minioPort}/${listingImagesBucketName}/${image.fileName}`}
            alt="listing image featuring a product/service"
          />
        </div>
      ))}

      {footer}
    </div>
  );
};
