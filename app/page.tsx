import ListingCard from "@/components/ListingCard";
import SideBar from "@/components/SideBar";
import { getAvailableListings } from "@/app/actions";
import { getSessionUserId } from "@/app/utils/hooks";

export default async function Home() {
  const userId = await getSessionUserId();
  if (!userId) {
    return <div>Not logged in</div>;
  }

  const listings = await getAvailableListings(userId);

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
