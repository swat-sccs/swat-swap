import { getSavedListings } from "@/app/actions";
import { getSessionUserId } from "@/utils/hooks";
import { CommunityListingCard } from "@/components";

export default async function Home() {
  const userId = await getSessionUserId();

  if (!userId) {
    return <div>Not logged in</div>;
  }
  const savedListings = await getSavedListings(userId);

  return (
    <div className="flex flex-col px-24 my-4">
      <div className="flex flex-wrap gap-6">
        {savedListings.map((savedListing) => (
          <CommunityListingCard key={savedListing.id} listing={savedListing} />
        ))}
      </div>
    </div>
  );
}
