import { Box } from "@mui/material";
import { getSavedListings } from "@/app/actions";
import { getSessionUserId } from "@/utils/hooks";
import MySavedListingCard from "./components/MySavedListingCard";

export default async function Home() {
  const userId = await getSessionUserId();

  if (!userId) {
    return <div>Not logged in</div>;
  }
  const savedListings = await getSavedListings(userId);

  return (
    <Box className="flex h-[calc(100vh-68.5px)] p-8">
      <div className="flex flex-wrap gap-6">
        {savedListings.map((savedListing) => (
          <MySavedListingCard key={savedListing.id} listing={savedListing} />
        ))}
      </div>
    </Box>
  );
}
