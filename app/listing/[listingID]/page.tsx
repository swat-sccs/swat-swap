"use server";
import { Container, Typography, Grid, Button, Box } from "@mui/material";
// import style from './Product.module.css';
import Image from "next/image";
import prisma from "@/prisma/prisma";
import { deleteListing, getUserById, getListing } from "@/app/actions";
import { User } from "@/app/dtos";
import {
  listingImagesBucketName,
  minioEndpoint,
  minioPort,
} from "@/app/config";
import DeleteListingButton from "@/components/DeleteListingButton";

async function getUserId(userID: number) {
  return await prisma.user.findUnique({
    where: {
      id: userID,
    },
  });
}

export default async function ListingID({
  params,
}: {
  params: { listingID: string };
}) {
  const listing = await getListing(parseInt(params.listingID));
  const userId = listing?.userId ?? 1;
  const user: User = await getUserById(userId);
  const formattedCreatedAt = listing?.createdAt
    ? new Date(listing.createdAt).toLocaleString()
    : "";
  if (!listing) {
    return <p>Listing does not exist!</p>;
  }
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
              src={`http://${minioEndpoint}:${minioPort}/${listingImagesBucketName}/${listing?.images[0].fileName}`}
              alt="listing image featuring a product/service"
              className="object-cover overflow-clip"
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={6} gap={8}>
          <Typography variant="h5">{listing?.title}</Typography>
          <Typography fontSize={"20px"} fontWeight={"bold"}>
            ${listing?.price}
          </Typography>
          <Typography fontSize={"18px"}>{listing?.description}</Typography>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
          >
            <Typography fontSize={"18px"} fontWeight={"bold"}>
              Category:
            </Typography>

            {listing?.category.map((category, index) => (
              <Typography
                key={category}
                fontSize={"18px"}
                style={{ marginLeft: "8px" }}
              >
                {category}
                {index !== listing.category.length - 1 && ","}
              </Typography>
            ))}
          </div>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
          >
            <Typography fontSize={"18px"} fontWeight={"bold"}>
              Payment Type:
            </Typography>

            {listing?.paymentType.map((pt, index) => (
              <Typography
                key={pt}
                fontSize={"18px"}
                style={{ marginLeft: "8px" }}
              >
                {pt}
                {index !== listing.paymentType.length - 1 && ","}
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
            <Typography fontSize={"18px"} fontWeight={"bold"}>
              Apparel Gender:
            </Typography>
            {listing?.apparel.map((appar, index) => (
              <Typography
                key={appar}
                fontSize={"18px"}
                style={{ marginLeft: "8px" }}
              >
                {appar}
                {index !== listing.apparel.length - 1 && ","}
              </Typography>
            ))}
          </div>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
          >
            <Typography fontSize={"18px"} fontWeight={"bold"}>
              Size:
            </Typography>
            {listing?.size.map((size, index) => (
              <Typography
                key={size}
                fontSize={"18px"}
                style={{ marginLeft: "8px" }}
              >
                {size}
                {index !== listing.size.length - 1 && ","}
              </Typography>
            ))}
          </div>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
          >
            <Typography fontSize={"18px"} fontWeight={"bold"}>
              Color:
            </Typography>
            {listing?.color.map((color, index) => (
              <Typography
                key={color}
                fontSize={"18px"}
                style={{ marginLeft: "8px" }}
              >
                {color}
                {index !== listing.color.length - 1 && ","}
              </Typography>
            ))}
          </div>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "20px" }}
          >
            <Typography fontSize={"18px"} fontWeight={"bold"}>
              Contact:
            </Typography>
            <Typography fontSize={"18px"} style={{ marginLeft: "8px" }}>
              {user.name}
            </Typography>
          </div>
          <Typography fontSize={"18px"}>{user.email}</Typography>
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
        <DeleteListingButton listingId={listing.id} />
      </Grid>
    </Container>
  );
}
