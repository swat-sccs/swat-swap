"use client";
import { createListing } from "@/app/actions";
import { CreateListingPayload, createListingFormDataSchema } from "@/dtos";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components";
import { useRouter } from "next/navigation";
import { serialize } from "object-to-formdata";
import { useCallback } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { ListingTypeForm } from "./ListingTypeForm";
import { ListingTitleForm } from "./ListingTitleForm";
import { ListingDescriptionForm } from "./ListingDescriptionForm";
import { ListingImagesForm } from "./ListingImagesForm";
import { ListingConditionForm } from "./ListingConditionForm";
import { ListingPriceForm } from "./ListingPriceForm";
import { ListingPaymentTypesForm } from "./ListingPaymentTypesForm";
import { ListingCategoryForm } from "./ListingCategoryForm";
import { ListingBrandForm } from "./ListingBrandForm";
import { ListingFirmOnPriceForm } from "./ListingFirmOnPriceForm";

interface CreateListingFormProps {
  userId: number;
}

const CreateListingForm = ({ userId }: CreateListingFormProps) => {
  const router = useRouter();
  const methods = useForm<CreateListingPayload>({
    defaultValues: {
      acceptedPaymentTypes: [],
    },
    resolver: zodResolver(createListingFormDataSchema),
  });

  const onFormSubmitSuccess = useCallback(
    async (data: CreateListingPayload) => {
      console.log("submitting the following data", data);
      const res = await createListing(
        userId,
        serialize(data, { noAttributesWithArrayNotation: true })
      );
      console.log(res);
      if (res.status === 200) {
        alert("Successfully created listing.");
        router.push("/");
      } else {
        alert("Failed to created listing. Try again later.");
      }
    },
    [router, userId]
  );

  const onFormSubmitError = useCallback((error: any) => {
    console.log(error);
  }, []);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onFormSubmitSuccess, onFormSubmitError)}
      >
        <div className="flex flex-col w-full gap-y-8">
          <ListingImagesForm />
          
          <ListingTypeForm />

          <ListingTitleForm />

          <ListingDescriptionForm />

          <ListingCategoryForm />

          <ListingConditionForm />

          <ListingBrandForm />

          {/* add size here? not sure where that would be added in from, and should only be rendered depending on the selection of clothing or not from catagory */}

          <ListingPriceForm />

          <ListingFirmOnPriceForm/>

          <ListingPaymentTypesForm />

          <div>
            <Button type="submit">List it!</Button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default CreateListingForm;

{
  /* {category === "clothing" && (
            <>
              <p>Choose an apparel gender</p>
              <Select
                multiple
                style={{
                  marginTop: "10px",
                  width: "50%",
                }}
                defaultValue={[]}
                {...register("apparelGender")}
              >
                <MenuItem value="women">{"women's / feminine "}</MenuItem>
                <MenuItem value="men">{"men's / masculine"}</MenuItem>
                <MenuItem value="unisex">unisex / genderless</MenuItem>
              </Select>

              <FieldErrorMessage errors={errors} field="apparelGender" />

              <p>Choose an apparel size</p>

              <FieldErrorMessage errors={errors} field="apparelSize" />
            </>
          )} 
          */
}
