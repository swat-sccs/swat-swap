import { getAvailableListings } from "@/app/actions";
import { getSessionUserId } from "@/utils/hooks";
import prisma from "@/prisma/db";
import { SavedListing, savedListingsSchema } from "@/dtos";
import PublicListingCard from "./components/PublicListingCard";

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

export default async function Home() {
  const userId = await getSessionUserId();
  if (!userId) {
    return <div>Not logged in</div>;
  }

  const listings = await getHomeListings(userId);

  return (
    <div className="flex gap-x-8 h-full">
      <div className="flex flex-wrap gap-8">
        {listings.map((listing) => (
          <PublicListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
}
