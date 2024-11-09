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
    <Container
      style={{
        width: "75%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        marginTop: "20pt",
        paddingBottom: "20pt",
        backgroundColor: "#f1f1f1",
      }}
    >
      <Grid>
        <Grid>
          <Box>
            <Image
              fill={true}
              src={`${minioListingImagesEndpoint}/${listing?.images[0].fileName}`}
              alt="listing image featuring a product/service"
              className="object-cover overflow-clip"
            />
          </Box>
        </Grid>

        <Grid>
          {/* <p variant="h5">theron:{listing?.title}</Typography> */}
          {!!listing.price && <p>${listing?.price}</p>}

          <div
            style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
          >
            <p>{`Description:`}</p>

            <p>{listing?.description}</p>
          </div>

          <div
            style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
          >
            <p>Category:</p>

            <p>{listing.category}</p>
          </div>

          <div
            style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
          >
            <p>Payment Type:</p>

            {listing?.acceptedPaymentTypes.map((pt, index) => (
              <p key={pt}>
                {pt}
                {index !== listing.acceptedPaymentTypes.length - 1 && ","}
              </p>
            ))}
          </div>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
          >
            <p>Condition:</p>
            <p>{listing?.condition}</p>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
          >
            {/* <p fontSize={"18px"} fontWeight={"bold"}>
              Apparel Gender:
            </p> */}
            {/* {listing?.apparel.map((appar, index) => (
              <p
                key={appar}
                fontSize={"18px"}
                style={{ marginLeft: "8px" }}
              >
                {appar}
                {index !== listing.apparel.length - 1 && ","}
              </p>
            ))} */}
          </div>

          <div
            style={{ display: "flex", alignItems: "center", marginTop: "20px" }}
          >
            <p>Contact:</p>
            <p>{listingUserData.name}</p>
          </div>
          <p>{listingUserData.email}</p>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "20px" }}
          >
            <p>Posted on:</p>
            <p>{formattedCreatedAt}</p>
          </div>
        </Grid>
        <Grid>
          <Grid>
            <DeleteListingButton listingId={listing.id} />
          </Grid>
          <Grid>
            <DeactivateListingButton
              listingId={listing.id}
              active={listing.active}
            />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ListingPage;
