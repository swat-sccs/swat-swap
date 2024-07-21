import { Textarea } from "@/components";
import FieldErrorMessage from "./FieldErrorMessage";
import { useFormContext } from "react-hook-form";
import { CreateListingPayload } from "@/dtos";

export const ListingDescriptionForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<CreateListingPayload>();

  return (
    <div className="flex flex-col gap-2">
      <p className="m-0 font-medium text-xl">Add a description</p>
      <Textarea autosize minRows={5} maxRows={5} {...register("description")} />
      <FieldErrorMessage errors={errors} field="description" />
    </div>
  );
};
