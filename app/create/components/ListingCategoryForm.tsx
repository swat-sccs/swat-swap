import { Controller, useFormContext } from "react-hook-form";
import FieldErrorMessage from "./FieldErrorMessage";
import { CreateListingPayload, ListingCategories } from "@/dtos";
import { startCase } from "lodash";
import Select from "react-select";

export const ListingCategoryForm = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<CreateListingPayload>();
  return (
    <div className="flex flex-col gap-2">
      <p className="m-0 font-medium text-xl">Choose a category</p>

      <Controller
        name="category"
        control={control}
        render={({ field: { onChange } }) => (
          <Select
            onChange={(option) => onChange(option?.value)}
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
    </div>
  );
};
