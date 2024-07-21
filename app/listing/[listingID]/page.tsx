import { Container, Typography, Grid, Box } from "@mui/material";
import Image from "next/image";
import { getUserDataById, getListing } from "@/app/actions";
import { minioListingImagesEndpoint } from "@/config/";
import DeleteListingButton from "@/components/DeleteListingButton";
import DeactivateListingButton from "@/components/DeactivateListingButton";

interface ListingPageProps {
  params: {
    listingId: string;
  };
}

const ListingPage = async ({ params: { listingId } }: ListingPageProps) => {
  const listing = await getListing(parseInt(listingId));

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
      <Grid container spacing={2} style={{ margin: "8px" }}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: "90%",
              width: "90%",
              overflow: "clip",
              position: "relative",
            }}
          >
            <Image
              fill={true}
              src={`${minioListingImagesEndpoint}/${listing?.images[0].fileName}`}
              alt="listing image featuring a product/service"
              className="object-cover overflow-clip"
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={6} gap={8}>
          {/* <Typography variant="h5">theron:{listing?.title}</Typography> */}
          {!!listing.price && (
            <Typography fontSize={"20px"} fontWeight={"bold"}>
              ${listing?.price}
            </Typography>
          )}

          <div
            style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
          >
            <Typography fontSize={"18px"} fontWeight={"bold"}>
              {`Description:`}
            </Typography>

            <Typography fontSize={"18px"}>{listing?.description}</Typography>
          </div>

          <div
            style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
          >
            <Typography fontSize={"18px"} fontWeight={"bold"}>
              Category:
            </Typography>

            <Typography fontSize={"18px"} style={{ marginLeft: "8px" }}>
              {listing.category}
            </Typography>
          </div>

          <div
            style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
          >
            <Typography fontSize={"18px"} fontWeight={"bold"}>
              Payment Type:
            </Typography>

            {listing?.acceptedPaymentTypes.map((pt, index) => (
              <Typography
                key={pt}
                fontSize={"18px"}
                style={{ marginLeft: "8px" }}
              >
                {pt}
                {index !== listing.acceptedPaymentTypes.length - 1 && ","}
              </Typography>
            ))}
          </div>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
          >
            <Typography fontSize={"18px"} fontWeight={"bold"}>
              Condition:
            </Typography>
            <Typography fontSize={"18px"} style={{ marginLeft: "8px" }}>
              {listing?.condition}
            </Typography>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
          >
            {/* <Typography fontSize={"18px"} fontWeight={"bold"}>
              Apparel Gender:
            </Typography> */}
            {/* {listing?.apparel.map((appar, index) => (
              <Typography
                key={appar}
                fontSize={"18px"}
                style={{ marginLeft: "8px" }}
              >
                {appar}
                {index !== listing.apparel.length - 1 && ","}
              </Typography>
            ))} */}
          </div>

          <div
            style={{ display: "flex", alignItems: "center", marginTop: "20px" }}
          >
            <Typography fontSize={"18px"} fontWeight={"bold"}>
              Contact:
            </Typography>
            <Typography fontSize={"18px"} style={{ marginLeft: "8px" }}>
              {listingUserData.name}
            </Typography>
          </div>
          <Typography fontSize={"18px"}>{listingUserData.email}</Typography>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "20px" }}
          >
            <Typography fontSize={"18px"} fontWeight={"bold"}>
              Posted on:
            </Typography>
            <Typography fontSize={"18px"} style={{ marginLeft: "8px" }}>
              {formattedCreatedAt}
            </Typography>
          </div>
        </Grid>
        <Grid container spacing={3} style={{ marginTop: "5px" }}>
          <Grid item>
            <DeleteListingButton listingId={listing.id} />
          </Grid>
          <Grid item>
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
