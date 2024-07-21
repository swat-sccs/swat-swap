import { Input } from "@/components";
import FieldErrorMessage from "./FieldErrorMessage";
import { useFormContext } from "react-hook-form";
import { CreateListingPayload } from "@/dtos";

export const ListingTitleForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<CreateListingPayload>();

  return (
    <div className="flex flex-col gap-2">
      <p className="m-0 font-medium text-xl">Add a title</p>
      <Input className="w-full" {...register("title")} />
      <FieldErrorMessage errors={errors} field="title" />
    </div>
  );
};
