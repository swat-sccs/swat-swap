import { Grid } from "@mui/material";
import ListingCard from "./ListingCard";
import { getFilteredListings } from "@/app/lib/listing";
import { FilterOptions } from "@/app/page";

interface HomeListingsProps {
  filterOptions: FilterOptions;
}

export async function HomeListings({ filterOptions }: HomeListingsProps) {
  const listings = await getFilteredListings(filterOptions);
  return (
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
  );
}
