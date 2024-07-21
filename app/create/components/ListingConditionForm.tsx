import { CreateListingPayload, ListingConditions } from "@/dtos";
import { Controller, useFormContext } from "react-hook-form";
import FieldErrorMessage from "./FieldErrorMessage";
import Select from "react-select";
import { startCase } from "lodash";

export const ListingConditionForm = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<CreateListingPayload>();

  return (
    <div className="flex flex-col gap-2">
      <p className="m-0 font-medium text-xl">Choose a condition</p>

      <Controller
        name="condition"
        control={control}
        render={({ field: { onChange } }) => (
          <Select
            className="w-1/3"
            onChange={(option) => onChange(option?.value)}
            options={ListingConditions.map((value) => {
              return {
                value: value,
                label: startCase(value),
              };
            })}
          />
        )}
      />

      <FieldErrorMessage errors={errors} field="condition" />
    </div>
  );
};
