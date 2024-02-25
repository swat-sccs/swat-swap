export const ListingType: {
  buying: "buying";
  selling: "selling";
  service: "service";
} = {
  buying: "buying",
  selling: "selling",
  service: "service",
};

export type ListingType = (typeof ListingType)[keyof typeof ListingType];



