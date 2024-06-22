import { CreateListingPayload } from "@/dtos";
import { FieldErrors } from "react-hook-form";

interface FieldErrorMesage {
  errors: FieldErrors<CreateListingPayload>;
  field: keyof CreateListingPayload;
}

const FieldErrorMessage = ({ errors, field }: FieldErrorMesage) => {
  return (
    errors[field] && <p className="text-red-500">{errors[field]?.message}</p>
  );
};

export default FieldErrorMessage;
