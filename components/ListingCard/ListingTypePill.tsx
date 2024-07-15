import { Listing, ListingTypes } from "@/dtos";
import { clsx } from "clsx";

interface ListingTypePillProps {
  type: Listing["type"];
}

export const ListingTypePill = ({ type }: ListingTypePillProps) => {
  return (
    <div
      className={clsx("flex py-1 px-2 w-fit rounded-md text-sm", {
        "bg-red-200": type === ListingTypes.Selling,
        "bg-yellow-200": type === ListingTypes.Service,
      })}
    >
      <p
        className={clsx("font-semibold", {
          "text-red-900": type === ListingTypes.Selling,
          "text-yellow-900": type === ListingTypes.Service,
        })}
      >
        {type}
      </p>
    </div>
  );
};
