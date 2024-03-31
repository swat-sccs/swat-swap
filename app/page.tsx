import ListingCard from "@/components/ListingCard";
import SideBar from "@/components/SideBar";
import { getAllActiveUserListings } from "@/app/actions";
import { getServerSession } from "next-auth";

export default async function Home() {
  // TODO: refactor with actual userId (may want to do this in the server action itself)
  const session = await getServerSession();
  // const userId = 1;

  const listings = await getAllActiveUserListings(session?.user.id);

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
