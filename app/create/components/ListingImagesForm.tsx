import { CreateListingPayload } from "@/dtos";
import { Controller, useFormContext } from "react-hook-form";
import FieldErrorMessage from "./FieldErrorMessage";

export const ListingImagesForm = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<CreateListingPayload>();
  return (
    <div className="flex flex-col gap-2">
      <p className="m-0 font-medium text-xl">Add images</p>
      <Controller
        name="image"
        control={control}
        render={({ field: { value, onChange, ...field } }) => (
          <input
            type="file"
            style={{ marginTop: "10px" }}
            accept="image/*"
            onChange={(e) => {
              e.preventDefault();
              onChange(e.target.files?.length ? e.target.files[0] : null);
            }}
            {...field}
          />
        )}
      />

      <FieldErrorMessage errors={errors} field="image" />
    </div>
  );
};
