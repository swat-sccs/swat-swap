import SideBar from "@/components/SideBar";
import { getAvailableListings } from "@/app/actions";
import { getSessionUserId } from "@/utils/hooks";
import { type SavedListing, savedListingsSchema } from "@/dtos";
import Link from "next/link";
import Image from "next/image";
import { listingImagesBucketName, minioEndpoint, minioPort } from "@/config";
import ListingTypePill from "@/components/ListingTypePill";
import FavoriteListingIcon from "@/components/FavoriteListingIcon";
import prisma from "@/prisma/prisma";

const getHomeListings = async (userId: number): Promise<SavedListing[]> => {
  const availableListings = await getAvailableListings(userId);

  const favoritedListings = await prisma.favoriteListing.findMany({
    where: {
      userId: {
        equals: userId,
      },
    },
  });

  const mergedListings = availableListings.map((listing) => {
    const saved = favoritedListings.some(
      (savedListing) => savedListing.listingId === listing.id
    );
    return { ...listing, saved };
  });

  const validatedListings = savedListingsSchema.parse(mergedListings);
  return validatedListings;
};

export interface ListingCardProps {
  listing: SavedListing;
}

const ListingCard = ({ listing }: ListingCardProps) => {
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
    </Link>
  );
};

export default async function Home() {
  const userId = await getSessionUserId();
  if (!userId) {
    return <div>Not logged in</div>;
  }

  const listings: SavedListing[] = await getHomeListings(userId);

  return (
    <div className="flex gap-x-8">
      <SideBar />
      <div className="flex flex-wrap gap-8">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
}
