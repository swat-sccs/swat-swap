import { ListingCategory } from "@/dtos";
import React from "react";

const CATEGORY_LABELS_MAP: Record<ListingCategory, string> = {
  clothing: "Clothing",
  furniture: "Furniture",
  school_supplies: "School Supplies",
  books: "Books",
  electronics: "Electronics",
  sports_equipment: "Sports Equipment",
  musical_instrument: "Musical Instrument",
  transportation: "Transportation",
  misc: "Misc",
};

interface ListingCategoryLabelProps {
  category: ListingCategory;
}

export const ListingCategoryLabel = ({
  category,
}: ListingCategoryLabelProps) => {
  return (
    <p className="m-0 text-xs font-semibold">{CATEGORY_LABELS_MAP[category]}</p>
  );
};
