import * as React from "react";

import { blue } from "@mui/material/colors";
import {
  Avatar,
  IconButton,
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  Typography,
  Box,
  Link,
} from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Listing } from "@/app/dtos/listing";

export interface ListingCardProps {
  listing: Listing;
}

const cardWidth = 256;

export default function ListingCard({ listing }: ListingCardProps) {
  const link = "/listing/" + listing.id;

  return (
    <Card sx={{ maxWidth: cardWidth, margin: 1 }}>
      <CardHeader
        title={
          <Typography
            className={"max-w-56"}
            noWrap
            variant="h5"
            color="text.primary"
          >
            <Link href={link} underline="none">
              {listing.title}
            </Link>
          </Typography>
        }
        subheader={
          <Box className="flex justify-between">
            <Typography variant="h6" color="text.primary">
              ${listing.price}
            </Typography>
            <Typography
              variant="h6"
              fontWeight={600}
              sx={{
                color: "black",
                backgroundColor: {
                  buying: "#9EEA6C",
                  selling: "#EA6C6C",
                  service: "#EA6C6C",
                }[listing.type],
                paddingInline: "6px",
                borderRadius: "4px",
              }}
            >
              {listing.type}
            </Typography>
          </Box>
        }
      />

      <CardMedia
        sx={{ height: (cardWidth * 4) / 5, width: cardWidth }}
        component="img"
        // think about image support later
        // image={listing.image}
        alt="ooh what he doing :3"
      />

      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton aria-label="bookmark">
          <BookmarkIcon />
        </IconButton>

        <Avatar sx={{ bgcolor: blue[500] }} aria-label="User">
          :3
        </Avatar>
      </CardActions>
    </Card>
  );
}
