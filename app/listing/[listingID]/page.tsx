"use server";
import { Container, Typography, Grid, Button } from "@mui/material";
// import style from './Product.module.css';
import Image from "next/image";
import prisma from "@/prisma/prisma";
import { getUserById } from "@/app/actions";
import { User } from "@/app/dtos";

async function getListing(listingId: number) {
  return await prisma.listing.findUnique({
    where: {
      id: listingId,
    },
  });
}

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
          <Image
            src="/static/images/cards/uni.jpg"
            alt="image"
            width={400}
            height={400}
          />
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
            <Typography fontSize={"18px"} style={{ marginLeft: "8px" }}>
              {listing?.category}
            </Typography>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
          >
            <Typography fontSize={"18px"} fontWeight={"bold"}>
              Payment Type:
            </Typography>
            <Typography fontSize={"18px"} style={{ marginLeft: "8px" }}>
              {listing?.paymentType}
            </Typography>
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
            <Typography fontSize={"18px"} style={{ marginLeft: "8px" }}>
              {listing?.apparel}
            </Typography>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
          >
            <Typography fontSize={"18px"} fontWeight={"bold"}>
              Size:
            </Typography>
            <Typography fontSize={"18px"} style={{ marginLeft: "8px" }}>
              {listing?.size}
            </Typography>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
          >
            <Typography fontSize={"18px"} fontWeight={"bold"}>
              Color:
            </Typography>
            <Typography fontSize={"18px"} style={{ marginLeft: "8px" }}>
              {listing?.color}
            </Typography>
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
          <Typography fontSize={"18px"}>696969</Typography>
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
        <Button>delete</Button>
      </Grid>
    </Container>
  );
}
