import { getUserCreatedListings } from "@/app/actions";
import { getSessionUserId } from "../utils/hooks";
import UserListingCard from "@/components/UserListingCard";

export default async function Home() {
  const userId = await getSessionUserId();

  if (!userId) {
    return <div>Not logged in</div>;
  }

  const userListings = await getUserCreatedListings(userId);

  return (
    <div className="flex gap-x-8">
      <div className="flex flex-wrap gap-8">
        {userListings.map((listing) => (
          <UserListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
}
