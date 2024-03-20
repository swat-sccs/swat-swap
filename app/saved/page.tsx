import ListingCard from "@/components/ListingCard";
import SideBar from "@/components/SideBar";
import { Box, Grid } from "@mui/material";
import { getAllActiveUserListings } from "@/app/actions";

export default async function Home() {
  const userId = 1;
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
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </Grid>
    </Box>
  );
}
