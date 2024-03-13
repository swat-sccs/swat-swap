import ListingCard from "@/components/ListingCard";
import SideBar from "@/components/SideBar";
import { Box, Grid } from "@mui/material";
import { getAllActiveUserListings } from "../lib/userListing";

export default async function Home() {
    // dummy id
  const userId = "123";
  const userIdNumber = parseInt(userId, 10);
  const listings = await getAllActiveUserListings(userIdNumber);

  return (
    <Box className="flex h-[calc(100vh-68.5px)]">

      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="space-evenly"
        alignItems="stretch"
        className="flex-1 p-4 overflow-y-scroll"
      >
        {listings.map((userListing) => (
          <ListingCard key={userListing.id} listing={userListing} />
        ))}
      </Grid>
    </Box>
  );
}

