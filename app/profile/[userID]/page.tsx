import ListingCard from "@/components/ListingCard";
import { Divider, Icon } from "@mui/material";
import Image from "next/image";
import { getAllActiveUserListings } from "@/app/actions";
import { getUserById } from "@/app/actions";
import { User } from "@/app/dtos";
import { Edit } from "@/components/icons";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/configurations/auth";

interface UserProfilePageProps {
  params: {
    userID: string | null | undefined;
  };
}

export default async function UserProfilePage({
  params,
}: UserProfilePageProps) {
  const session = await getServerSession(authOptions);

  const user: User = await getUserById(session?.user.id);
  const userListings = await getAllActiveUserListings(session?.user.id);

  return (
    <div className="flex flex-col gap-y-4 lg:py-8 lg:px-12">
      <div className="flex gap-x-16 items-center">
        <Image
          src="/images/cards/maxwell1.jpg"
          alt="image"
          width={400}
          height={400}
          className="rounded-full w-1/4 lg:m-8"
        />
        <div className="flex flex-col gap-y-4">
          <div className="flex justify-end items-center gap-1">
            <Link href={"/profile/edit"}>
              <p className="text-lg font-semibold cursor-pointer hover:font-bold">
                Edit Profile
              </p>
            </Link>
            {user.id === Number(params.userID) && <Icon component={Edit} />}
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-5xl font-bold">{user.displayName}</p>
          </div>
          <p className="ml-2 text-xl font-medium">{user.email}</p>
          <p className="ml-2 text-xl line-clamp-4">{user.biography}</p>
        </div>
      </div>
      <Divider className="font-semibold text-xl">My Listings</Divider>
      <div className="flex flex-wrap gap-4">
        {userListings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
}
