import FavoriteListingIcon from "@/components/FavoriteListingIcon";
import ListingTypePill from "@/components/ListingTypePill";
import { listingImagesBucketName, minioHostname, minioPort } from "@/config";
import { SavedListing } from "@/dtos";
import { getSessionUserId } from "@/utils/hooks";
import Image from "next/image";
import Link from "next/link";

export interface ListingCardProps {
  listing: SavedListing;
}

const PublicListingCard = async ({ listing }: ListingCardProps) => {
  const userId = await getSessionUserId();

  if (!userId) {
    return;
  }

  return (
    <Link href={`listing/${listing.id}`}>
      <div className="flex flex-col p-4 shadow-md rounded-lg h-fit gap-y-2 hover:cursor-pointer">
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
              src={`http://${minioHostname}:${minioPort}/${listingImagesBucketName}/${image.fileName}`}
              alt="listing image featuring a product/service"
            />
          </div>
        ))}
        <div className="flex justify-end">
          <ListingTypePill type={listing.type} />
          <FavoriteListingIcon listing={listing} userId={userId} />
        </div>
      </div>
    </Link>
  );
};

export default PublicListingCard;
