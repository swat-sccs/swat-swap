import { CreateListingPayload, ListingTypes } from "@/dtos";
import { Group, Radio } from "@/components";
import { startCase } from "lodash";
import { Controller, useFormContext } from "react-hook-form";
import FieldErrorMessage from "./FieldErrorMessage";

export const ListingTypeForm = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<CreateListingPayload>();
  return (
    <div className="flex flex-col gap-2">
      <p className="m-0 font-medium text-xl">Choose a type of listing</p>

      <Controller
        name="type"
        control={control}
        render={({ field }) => (
          <Radio.Group
            aria-labelledby="radiohead"
            aria-orientation="horizontal"
            {...field}
          >
            <Group>
              {ListingTypes.map((type) => (
                <Radio key={type} value={type} label={startCase(type)} />
              ))}
            </Group>
          </Radio.Group>
        )}
      />

      <FieldErrorMessage errors={errors} field="type" />
    </div>
  );
};
