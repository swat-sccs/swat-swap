import {
  ListingType,
  CategoryType,
  PaymentType,
  ConditionType,
  ApparelType,
  SizeType,
} from "./constants";

export type ListingType = (typeof ListingType)[keyof typeof ListingType];
export type CategoryType = (typeof CategoryType)[keyof typeof CategoryType];
export type PaymentType = (typeof PaymentType)[keyof typeof PaymentType];
export type ConditionType = (typeof ConditionType)[keyof typeof ConditionType];
export type ApparelType = (typeof ApparelType)[keyof typeof ApparelType];
export type SizeType = (typeof SizeType)[keyof typeof SizeType];
