"use client";

import { favoriteListing, unfavoriteListing } from "@/app/actions";
import { Listing } from "@/app/dtos";
import { useCallback } from "react";

interface FavoriteListingIconProps {
  listing: Listing;
}

const FavoriteListingIcon = ({ listing }: FavoriteListingIconProps) => {
  const onToggleFavorite = useCallback(() => {
    if (listing.favorited) {
      unfavoriteListing(1, listing.id);
    } else {
      favoriteListing(1, listing.id);
    }
  }, [listing]);
  return (
    <div onClick={onToggleFavorite}>
      {listing.favorited ? "unsave" : "save"}
    </div>
  );
};

export default FavoriteListingIcon;
