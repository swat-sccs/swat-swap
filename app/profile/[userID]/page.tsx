import ListingCard from "@/components/ListingCard";
import { Divider } from "@mui/material";
import Image from "next/image";
import { getAllActiveUserListings } from "../../lib/userListing";
import { getUserById } from "@/app/actions";
import { User } from "@/app/dtos";

interface UserProfilePageProps {
  params: {
    userID: string;
  };
}

export default async function UserProfilePage({
  params,
}: UserProfilePageProps) {
  const user: User = await getUserById(parseInt(params.userID));
  const userListings = await getAllActiveUserListings(parseInt(params.userID));

  return (
    <div className="flex flex-col gap-y-4 p-8">
      <div className="flex gap-x-16 items-center">
        <Image
          src="/static/images/cards/maxwell1.jpg"
          alt="image"
          width={400}
          height={400}
          className="rounded-full w-1/4 lg:p-8"
        />
        <div className="flex flex-col gap-y-4">
          <p className="text-5xl font-bold">{user.displayName}</p>
          <p className="ml-2 text-xl font-medium">{user.email}</p>
          <p className="ml-2 text-xl line-clamp-4">{user.biography}</p>
        </div>
      </div>
      <Divider className="font-semibold text-xl">My Listings</Divider>
      <div className="flex flex-wrap gap-4 justify-center">
        {userListings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
}
