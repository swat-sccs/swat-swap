import { Container, Grid, Box } from "@/components";
import Image from "next/image";
import { getUserDataById, getListing } from "@/app/actions";
import { minioListingImagesEndpoint } from "@/config/";
import DeleteListingButton from "@/components/DeleteListingButton";
import DeactivateListingButton from "@/components/DeactivateListingButton";

interface ListingPageProps {
  params: {
    listingID: string;
  };
}

const ListingPage = async ({ params: { listingID } }: ListingPageProps) => {
  const listing = await getListing(parseInt(listingID));

  if (!listing) {
    return <p>Listing does not exist!</p>;
  }

  const listingUserData = await getUserDataById(listing.userId);

  const formattedCreatedAt = listing?.createdAt
    ? new Date(listing.createdAt).toLocaleString()
    : "";

  return (
    <Container className="w-3/4 mx-auto mt-8 pb-8 bg-gray-50 rounded-lg shadow-md">
      <div className="flex">
            <h1 className="text-3xl font-bold mb-2">{listing?.title}</h1>
            {!!listing.price && (
              <p className="text-2xl font-semibold text-green-600 p-1">
                ${listing?.price}
              </p>
            )}
      </div>
      <Grid className="p-6">
        <Grid className="pr-5">
          <Box>
            <div className="relative w-64 h-64 rounded-lg overflow-hidden ">
              <Image
                fill={true}
                src={`${minioListingImagesEndpoint}/${listing?.images[0].fileName}`}
                alt="listing image featuring a product/service"
                layout="fill"
                className="object-cover"
              />
            </div>
          </Box>
        </Grid>

        <Grid className="pr-5">
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold mb-2">Description</h2>
              <p className="text-gray-700">{listing?.description}</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">Category</h2>
              <p className="text-gray-700">{listing.category}</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">Payment Types</h2>
              <div className="flex gap-2">
                {listing?.acceptedPaymentTypes.map((pt, index) => (
                  <span
                    key={pt}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
                  >
                    {pt}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">Condition</h2>
              <p className="text-gray-700">{listing?.condition}</p>
            </div>

            <div className="border-t pt-4 mt-6">
              <h2 className="text-lg font-semibold mb-2">Contact Information</h2>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <span className="font-medium">Name:</span> {listingUserData.name}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Email:</span> {listingUserData.email}
                </p>
              </div>
            </div>

            <div className="text-sm text-gray-500">
              Posted on: {formattedCreatedAt}
            </div>
          </div>
        </Grid>

        <Grid className="flex gap-4 mt-8">
          <DeleteListingButton listingId={listing.id} />
          <DeactivateListingButton
            listingId={listing.id}
            active={listing.active}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ListingPage;