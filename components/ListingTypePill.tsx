import { ListingTypes } from "@/app/dtos";
import { clsx } from "clsx";
import React from "react";

interface ListingTypePillProps {
  type: ListingTypes;
}

const ListingTypePill = ({ type }: ListingTypePillProps) => {
  return (
    <div
      className={clsx("flex py-1 px-2 w-fit rounded-md", {
        "bg-green-200": type === ListingTypes.Buying,
        "bg-red-200": type === ListingTypes.Selling,
        "bg-yellow-200": type === ListingTypes.Service,
      })}
    >
      <p
        className={clsx("font-bold", {
          "text-green-900": type === ListingTypes.Buying,
          "text-red-900": type === ListingTypes.Selling,
          "text-yellow-900": type === ListingTypes.Service,
        })}
      >
        {type}
      </p>
    </div>
  );
};

export default ListingTypePill;
