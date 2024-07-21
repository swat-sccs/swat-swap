import { IconCurrencyDollar } from "@tabler/icons-react";
import FieldErrorMessage from "./FieldErrorMessage";
import { Controller, useFormContext } from "react-hook-form";
import { CreateListingPayload } from "@/dtos";
import { NumberInput } from "@/components";

export const ListingPriceForm = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<CreateListingPayload>();
  return (
    <div className="flex flex-col gap-2">
      <p className="m-0 font-medium text-xl">Add a price</p>
      <Controller
        name="price"
        control={control}
        render={({ field }) => (
          <NumberInput className="w-1/3" hideControls {...field} />
        )}
      />
      <FieldErrorMessage errors={errors} field="price" />
    </div>
  );
};
