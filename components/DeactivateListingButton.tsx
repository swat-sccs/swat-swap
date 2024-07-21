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
  const [isActive, setActive] = useState(active);

  return (
    <Button
      onClick={() => {
        setActive(!isActive);
        toggleListingActivation(listingId, isActive);
      }}
    >
      {isActive ? "Deactivate" : "Activate"}
    </Button>
  );
};

export default DeactivateListingButton;
