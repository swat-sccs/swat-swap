import { getSessionUserId } from "@/utils/hooks";
import prisma from "@/prisma/db";
import { SavedListing, savedListingsSchema } from "@/dtos";
import FiltersSidebar from "./components/FiltersSidebar";
import { split } from "lodash";
import { CommunityListingCard } from "@/components";

export interface QueryFilters {
  categories?: string;
}
interface HomePageProps {
  searchParams?: QueryFilters;
}

const getHomeListings = async (
  userId: number,
  query: QueryFilters
): Promise<SavedListing[]> => {
  const filters: Record<string, any> = {
    active: true,
    userId: {
      not: userId,
    },
    ...(query.categories && {
      category: {
        in: split(query.categories, ","),
      },
    }),
  };

  const availableListings = await prisma.listing.findMany({
    include: {
      images: true,
    },
    where: {
      ...filters,
    },
  });

  const favoritedListings = await prisma.favoriteListing.findMany({
    where: {
      userId,
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

export default async function Home({ searchParams }: HomePageProps) {
  const userId = await getSessionUserId();
  if (!userId) {
    return <div>Not logged in</div>;
  }

  const listings = await getHomeListings(userId, searchParams ?? {});

  return (
    <div className="flex flex-1 overflow-hidden gap-x-8 ">
      <FiltersSidebar />
      <div className="flex flex-wrap flex-1 overflow-y-auto gap-8">
        {listings.map((listing) => (
          <CommunityListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
}
