import Image from "next/image";
import Link from "next/link";
import { SavedListing } from "@/dtos";
import ListingTypePill from "@/components/ListingTypePill";
import FavoriteListingIcon from "@/components/FavoriteListingIcon";
import { listingImagesBucketName, minioEndpoint, minioPort } from "@/config";

export interface MySavedListingCardProps {
  listing: SavedListing;
}

export default function MySavedListingCard({
  listing,
}: MySavedListingCardProps) {
  return (
    <div className="flex flex-col p-4 shadow-md rounded-lg h-fit gap-y-2">
      <div className="flex justify-between">
        <Link href={`listing/${listing.id}`}>
          <p className="text-xl font-semibold">{listing.title}</p>
        </Link>
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
        <FavoriteListingIcon listing={listing} />
      </div>
    </div>
  );
}
