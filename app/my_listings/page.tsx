import ListingCard from "@/components/ListingCard";
import { Box, Grid } from "@mui/material";
import { getAllActiveUserListings } from "@/app/actions";

export default async function Home() {
  // TODO: fix dummy id
  const listings = await getAllActiveUserListings(1);

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
