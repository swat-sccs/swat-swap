"use client";
import { saveListing, unsaveListing } from "@/app/actions";
import { SavedListing } from "@/dtos";
import { BookmarkBorderOutlined, BookmarkOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { MouseEvent, useCallback } from "react";

interface FavoriteListingIconProps {
  listing: SavedListing;
  userId: number;
}

export const SaveListingActionIcon = ({
  userId,
  listing,
}: FavoriteListingIconProps) => {
  const onToggleFavorite = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();

      if (listing.saved) {
        unsaveListing(userId, listing.id);
      } else {
        saveListing(userId, listing.id);
      }
    },
    [listing, userId]
  );

  return (
    <IconButton aria-label="save" color="primary" onClick={onToggleFavorite}>
      {listing.saved ? <BookmarkOutlined /> : <BookmarkBorderOutlined />}
    </IconButton>
  );
};
