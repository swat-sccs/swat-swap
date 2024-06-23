"use client";

import { favoriteListing, unfavoriteListing } from "@/app/actions";
import { SavedListing } from "@/dtos";
import { useCallback } from "react";

interface FavoriteListingIconProps {
  listing: SavedListing;
}

const FavoriteListingIcon = ({ listing }: FavoriteListingIconProps) => {
  const onToggleFavorite = useCallback(() => {
    if (listing.saved) {
      unfavoriteListing(1, listing.id);
    } else {
      favoriteListing(1, listing.id);
    }
  }, [listing]);
  return (
    <div onClick={onToggleFavorite}>{listing.saved ? "unsave" : "save"}</div>
  );
};

export default FavoriteListingIcon;
