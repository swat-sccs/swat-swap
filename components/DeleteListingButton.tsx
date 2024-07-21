"use client";

import { deleteListing } from "@/app/actions";
import { Button } from "@/components";

interface DeleteListingButtonProps {
  listingId: number;
}

const DeleteListingButton = ({ listingId }: DeleteListingButtonProps) => {
  return <Button onClick={() => deleteListing(listingId)}>Delete</Button>;
};

export default DeleteListingButton;
