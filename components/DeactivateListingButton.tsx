"use client";

import { toggleListingActivation } from "@/app/actions";
import { Button } from "@/components";
import { useState } from "react";

interface DeactivateListingButtonProps {
  listingId: number;
  active: boolean;
}

const DeactivateListingButton = ({
  listingId,
  active,
}: DeactivateListingButtonProps) => {
  const [isActive, setIsActive] = useState(active);

  const handleToggle = async () => {
    const updatedStatus = !isActive;
    await toggleListingActivation(listingId, updatedStatus);
    setIsActive(updatedStatus); // Update the local state
  };

  return (
    <Button onClick={handleToggle}>
      {isActive ? "Deactivate" : "Activate"}
    </Button>
  );
};

export default DeactivateListingButton;
