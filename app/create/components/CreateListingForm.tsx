"use client";

import { createListing } from "@/app/actions";
import {
  CreateListingPayload,
  ListingTypes,
  createListingFormDataSchema,
} from "@/app/dtos";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Container,
  FormControlLabel,
  InputAdornment,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { serialize } from "object-to-formdata";
import React, { useCallback } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";

interface CreateListingFormProps {
  userId: number;
}

const CreateListingForm = ({ userId }: CreateListingFormProps) => {
  const router = useRouter();
  const { register, handleSubmit, control } = useForm<CreateListingPayload>({
    resolver: zodResolver(createListingFormDataSchema),
  });

  const listingType = useWatch({
    name: "type",
    control,
  });

  const category = useWatch({
    name: "category",
    control,
  });

  const onFormSubmitSuccess = useCallback(
    async (data: CreateListingPayload) => {
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
    <form onSubmit={handleSubmit(onFormSubmitSuccess, onFormSubmitError)}>
      <Container
        style={{
          height: "auto",
          width: "50%",
          margin: "auto",
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          borderRadius: "4px",
        }}
      >
        <Typography
          fontSize={"20px"}
          fontWeight={"bold"}
          style={{ marginBottom: "20px" }}
        >
          Choose a type of listing
        </Typography>

        <Controller
          name="type"
          control={control}
          render={({ field }) => (
            <RadioGroup
              aria-labelledby="radiohead"
              aria-orientation="horizontal"
              row
              {...field}
            >
              <FormControlLabel
                value="selling"
                control={<Radio />}
                label="Selling"
                style={{ marginRight: "40px" }}
              />
              <FormControlLabel
                value="buying"
                control={<Radio />}
                label="Buying"
                style={{ marginRight: "40px" }}
              />
              <FormControlLabel
                value="service"
                control={<Radio />}
                label="Service"
                style={{ marginRight: "40px" }}
              />
            </RadioGroup>
          )}
        />

        <Typography
          fontSize={"20px"}
          fontWeight={"bold"}
          style={{ marginTop: "20px" }}
        >
          Add a title
        </Typography>
        <TextField
          fullWidth
          style={{ marginTop: "10px" }}
          {...register("title")}
        />

        <Typography
          fontSize={"20px"}
          fontWeight={"bold"}
          style={{ marginTop: "20px" }}
        >
          Add a description
        </Typography>
        <TextField
          multiline
          rows={4}
          style={{ marginTop: "10px", width: "100%" }}
          {...register("description")}
        />

        {listingType === ListingTypes.Selling && (
          <>
            <Typography
              fontSize={"20px"}
              fontWeight={"bold"}
              style={{ marginTop: "20px" }}
            >
              Add a price
            </Typography>
            <TextField
              type="number"
              style={{ marginTop: "10px", width: "30%" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
              {...register("price", {
                valueAsNumber: true,
              })}
            />

            <Typography
              fontSize={"20px"}
              fontWeight={"bold"}
              style={{ marginTop: "20px" }}
            >
              Choose a payment type
            </Typography>
            <Select
              multiple
              style={{
                marginTop: "10px",
                width: "50%",
              }}
              defaultValue={[]}
              {...register("paymentType")}
            >
              <MenuItem value="cash">cash</MenuItem>
              <MenuItem value="paypal">PayPal</MenuItem>
              <MenuItem value="zelle">Zelle</MenuItem>
              <MenuItem value="venmo">Venmo</MenuItem>
            </Select>
          </>
        )}

        <Typography
          fontSize={"20px"}
          fontWeight={"bold"}
          style={{ marginTop: "20px" }}
        >
          Add images
        </Typography>
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
        <Typography
          fontSize={"20px"}
          fontWeight={"bold"}
          style={{ marginTop: "20px" }}
        >
          Choose a category
        </Typography>
        <Select
          style={{
            marginTop: "10px",
            width: "50%",
          }}
          {...register("category")}
        >
          <MenuItem value="clothing_accessories">
            clothing & accessories
          </MenuItem>
          <MenuItem value="furniture_decor">furniture & decor</MenuItem>
          <MenuItem value="school_supplies">school supplies</MenuItem>
          <MenuItem value="books">books</MenuItem>
          <MenuItem value="electronics">electronics</MenuItem>
          <MenuItem value="sports_equipment">sports equipment</MenuItem>
          <MenuItem value="music_instruments">musical instruments</MenuItem>
          <MenuItem value="transportation">transportation</MenuItem>
          <MenuItem value="misc">misc</MenuItem>
        </Select>

        <Typography
          fontSize={"20px"}
          fontWeight={"bold"}
          style={{ marginTop: "20px" }}
        >
          Choose a condition
        </Typography>
        <Select
          style={{
            marginTop: "10px",
            width: "50%",
          }}
          defaultValue={[]}
          {...register("condition")}
        >
          <MenuItem value="brand_new_unboxed">brand new unboxed</MenuItem>
          <MenuItem value="brand_new_openbox">brand new open box</MenuItem>
          <MenuItem value="like_new">like new</MenuItem>
          <MenuItem value="lightly_used">lightly used</MenuItem>
          <MenuItem value="well_loved">well-loved</MenuItem>
          <MenuItem value="not_working">not working</MenuItem>
          <MenuItem value="parts_missing">parts missing</MenuItem>
        </Select>
        <Typography
          fontSize={"20px"}
          fontWeight={"bold"}
          style={{ marginTop: "20px" }}
        >
          Choose an apparel gender
        </Typography>
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

        <Typography
          fontSize={"20px"}
          fontWeight={"bold"}
          style={{ marginTop: "20px" }}
        >
          Choose an apparel size
        </Typography>
        <Select
          multiple
          style={{
            marginTop: "10px",
            width: "50%",
          }}
          defaultValue={[]}
          {...register("apparelSize")}
        >
          <MenuItem value="xxs">xxs</MenuItem>
          <MenuItem value="xs">xs</MenuItem>
          <MenuItem value="s">s</MenuItem>
          <MenuItem value="m">m</MenuItem>
          <MenuItem value="l">l</MenuItem>
          <MenuItem value="xl">xl</MenuItem>
          <MenuItem value="xxl">xxl</MenuItem>
          <MenuItem value=">xxxl">xxxl</MenuItem>
        </Select>

        <Button style={{ marginTop: "20px" }} type="submit">
          <Typography>List it!</Typography>
        </Button>
      </Container>
    </form>
  );
};

export default CreateListingForm;
