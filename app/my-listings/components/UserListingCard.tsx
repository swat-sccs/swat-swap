import * as React from "react";

import { UserListing } from "@/dtos/listing";
import Image from "next/image";
import { listingImagesBucketName, minioEndpoint, minioPort } from "@/config";
import ListingTypePill from "../../../components/ListingTypePill";
import Link from "next/link";

export interface ListingCardProps {
  listing: UserListing;
}

export default function UserListingCard({ listing }: ListingCardProps) {
  return (
    <Link href={`listing/${listing.id}`}>
      <div className="flex flex-col p-4 shadow-md rounded-lg h-fit gap-y-2">
        <div className="flex justify-between">
          <p className="text-xl font-semibold">{listing.title}</p>

          {listing.price !== null && (
            <p className="font-semibold">${listing.price}</p>
          )}
        </div>

        {listing.images.map((image) => (
          <div
            key={image.id}
            className="flex flex-col relative min-w-64 min-h-64 p-8 overflow-hidden"
          >
            <Image
              fill={true}
              className="object-cover"
              src={`http://${minioEndpoint}:${minioPort}/${listingImagesBucketName}/${image.fileName}`}
              alt="listing image featuring a product/service"
            />
          </div>
        ))}
        <div className="flex justify-end">
          <ListingTypePill type={listing.type} />
        </div>
      </div>
    </Link>
  );
}
