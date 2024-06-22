import { getUserCreatedListings } from "@/app/actions";
import { getSessionUserId } from "../../utils/hooks";
import UserListingCard from "./components/UserListingCard";
import ZeroListingsNotice from "./components/ZeroListingsNotice";

export default async function Home() {
  const userId = await getSessionUserId();

  if (!userId) {
    return <div>Not logged in</div>;
  }

  const userListings = await getUserCreatedListings(userId);

  const activeListings = userListings.filter((listing) => listing.active);
  const inactiveListings = userListings.filter((listing) => !listing.active);

  return (
    <div className="flex flex-col gap-y-16 p-8">
      {userListings.length === 0 ? (
        <ZeroListingsNotice />
      ) : (
        <>
          <div className="flex flex-col gap-y-4">
            <p className="font-semibold text-2xl">Currently Listed</p>
            <div className="flex flex-wrap gap-8">
              {activeListings.map((listing) => (
                <UserListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-y-4">
            <p className="font-semibold text-2xl">Ready to be Listed</p>
            <div className="flex flex-wrap gap-8">
              {inactiveListings.map((listing) => (
                <UserListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
