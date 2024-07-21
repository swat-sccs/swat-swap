import { Controller, useFormContext } from "react-hook-form";
import FieldErrorMessage from "./FieldErrorMessage";
import { CreateListingPayload, PaymentTypes } from "@/dtos";
import Select from "react-select";
import { startCase } from "lodash";

export const ListingPaymentTypesForm = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<CreateListingPayload>();
  return (
    <div className="flex flex-col gap-2">
      <p className="m-0 font-medium text-xl">Choose a payment type</p>

      <Controller
        name="acceptedPaymentTypes"
        control={control}
        render={({ field: { onChange } }) => (
          <Select
            isMulti
            onChange={(options) =>
              onChange(options.map((option) => option.value))
            }
            options={PaymentTypes.map((value) => {
              return {
                value: value,
                label: startCase(value),
              };
            })}
          />
        )}
      />

      <FieldErrorMessage errors={errors} field="acceptedPaymentTypes" />
    </div>
  );
};
