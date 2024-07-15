import React, { memo } from "react";
import {
  ListingCard,
  SaveListingActionIcon,
  ListingCategoryLabel,
} from "./ListingCard";
import { SavedListing } from "@/dtos";
import ListingTypePill from "./ListingTypePill";
import { getSessionUserId } from "@/utils/hooks";

interface CommunityListingCardHeaderProps {
  listing: SavedListing;
}

const CommunityListingCardHeader = memo(
  async ({ listing }: CommunityListingCardHeaderProps) => {
    const userId = await getSessionUserId();
    if (!userId) return null;
    return (
      <div className="flex items-center space-x-4 justify-between">
        <div className="flex flex-col">
          <ListingCategoryLabel category={listing.category} />
          <p className="m-0">{listing.title}</p>
        </div>
        <SaveListingActionIcon listing={listing} userId={userId} />
      </div>
    );
  }
);

interface CommunityListingCardFooterProps {
  listing: SavedListing;
}
const CommunityListingCardFooter = memo(
  async ({ listing }: CommunityListingCardFooterProps) => {
    const userId = await getSessionUserId();
    if (!userId) return null;

    return (
      <div className="flex space-x-4 justify-between">
        <p>
          {listing.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
        <div className="flex space-x-2">
          <ListingTypePill type={listing.type} />
        </div>
      </div>
    );
  }
);

interface CommunityListingCardProps {
  listing: SavedListing;
}

export const CommunityListingCard = ({
  listing,
}: CommunityListingCardProps) => {
  return (
    <ListingCard
      header={<CommunityListingCardHeader listing={listing} />}
      listing={listing}
      footer={<CommunityListingCardFooter listing={listing} />}
    />
  );
};
