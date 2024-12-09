import { Controller, useFormContext } from "react-hook-form";
import FieldErrorMessage from "./FieldErrorMessage";
import {
  clothingItemGenders,
  clothingItemSchema,
  clothingItemSizes,
  CreateListingPayload,
  ListingCategories,
  PaymentTypes,
} from "@/dtos";
import { startCase } from "lodash";
import Select from "react-select";
import { Category } from "@prisma/client";
import { useState } from "react";

/**
 * Returns component UI for "category"
 * @returns
 */
export const ListingCategoryForm = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<CreateListingPayload>();
  const [category, setCategory] = useState<string>("");
  return (
    <div className="flex flex-col gap-2">
      <p className="m-0 font-medium text-xl">Choose a category</p>

      <Controller
        name="category"
        control={control}
        render={({ field: { onChange } }) => (
          <Select
            onChange={(option) => {
              onChange(option?.value);
              if (typeof option?.value == "string") setCategory(option?.value);
            }}
            options={ListingCategories.map((value) => {
              return {
                value: value,
                label: startCase(value),
              };
            })}
          />
        )}
      />
      <FieldErrorMessage errors={errors} field="category" />

      {category == "clothing" && (
        <>
          <p className="m-0 font-medium text-xl">Choose a size</p>
          <Controller
            name="clothingItemSize"
            control={control}
            render={({ field: { onChange } }) => (
              <Select
                onChange={(option) => onChange(option?.value)}
                options={clothingItemSizes.map((value) => {
                  return {
                    value: value,
                    label: startCase(value),
                  };
                })}
              />
            )}
          />
          <p className="m-0 font-medium text-xl">Choose a gender</p>
          <Controller
            name="clothingItemTypes"
            control={control}
            render={({ field: { onChange } }) => (
              <Select
                onChange={(option) => onChange(option?.value)}
                options={clothingItemGenders.map((value) => {
                  return {
                    value: value,
                    label: startCase(value),
                  };
                })}
              />
            )}
          />
        </>
      )}
    </div>
  );
};
