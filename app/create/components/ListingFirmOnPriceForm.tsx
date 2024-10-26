import { CreateListingPayload, FirmOnPriceTypes, ListingTypes } from "@/dtos";
import { Group, Radio } from "@/components";
import { startCase } from "lodash";
import { Controller, useFormContext } from "react-hook-form";
import FieldErrorMessage from "./FieldErrorMessage";

export const ListingFirmOnPriceForm = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<CreateListingPayload>();
  return (
    <div className="flex flex-col gap-2">
      <p className="m-0 font-medium text-xl">Firm on price?</p>

      <Controller
        name="firmonprice"
        control={control}
        render={({ field }) => (
          <Radio.Group
            aria-labelledby="radiohead"
            aria-orientation="horizontal"
            {...field}
          >
            <Group>
              {FirmOnPriceTypes.map((firmonprice) => (
                <Radio key={firmonprice} value={firmonprice} label={startCase(firmonprice)} />
              ))}
            </Group>
          </Radio.Group>
        )}
      />

      <FieldErrorMessage errors={errors} field="firmonprice" />
    </div>
  );
};
