"use client";
import { saveListing, unsaveListing } from "@/app/actions";
import { SavedListing } from "@/dtos";
import { ActionIcon } from "@mantine/core";
import { IconBookmark, IconBookmarkFilled } from "@tabler/icons-react";
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
    <ActionIcon variant="transparent" onClick={onToggleFavorite}>
      {listing.saved ? <IconBookmarkFilled /> : <IconBookmark />}
    </ActionIcon>
  );
};
