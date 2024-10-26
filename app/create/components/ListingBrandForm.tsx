import { Input } from "@/components";
import FieldErrorMessage from "./FieldErrorMessage";
import { useFormContext } from "react-hook-form";
import { CreateListingPayload } from "@/dtos";

export const ListingBrandForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<CreateListingPayload>();

  return (
    <div className="flex flex-col gap-2">
      <p className="m-0 font-medium text-xl">Add a brand (optional)</p>
      <Input className="w-full" {...register("brand")} />
      <FieldErrorMessage errors={errors} field="brand" />
    </div>
  );
};