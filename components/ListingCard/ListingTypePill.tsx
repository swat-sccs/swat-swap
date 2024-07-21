import { Listing } from "@/dtos";
import { clsx } from "clsx";

interface ListingTypePillProps {
  type: Listing["type"];
}

export const ListingTypePill = ({ type }: ListingTypePillProps) => {
  return (
    <div
      className={clsx("flex py-1 px-2 w-fit rounded-md text-sm", {
        "bg-blue-200": type === "selling",
        "bg-yellow-200": type === "service",
      })}
    >
      <p
        className={clsx("font-semibold", {
          "text-blue-900": type === "selling",
          "text-yellow-900": type === "service",
        })}
      >
        {type}
      </p>
    </div>
  );
};
