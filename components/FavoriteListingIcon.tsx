"use client";
import { saveListing, unsaveListing } from "@/app/actions";
import { SavedListing } from "@/dtos";
import { useCallback } from "react";

interface FavoriteListingIconProps {
  listing: SavedListing;
  userId: number;
}

const FavoriteListingIcon = ({ userId, listing }: FavoriteListingIconProps) => {
  const onToggleFavorite = useCallback(() => {
    if (listing.saved) {
      unsaveListing(userId, listing.id);
    } else {
      saveListing(userId, listing.id);
    }
  }, [listing, userId]);

  return (
    <div onClick={onToggleFavorite}>{listing.saved ? "unsave" : "save"}</div>
  );
};

export default FavoriteListingIcon;
