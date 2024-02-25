"use client";

import React from "react";
import {
  Container,
  Typography,
  Grid,
  Radio,
  FormControlLabel,
  TextField,
  MenuItem,
  Select,
  RadioGroup,
  Button,
} from "@mui/material";

export default function Create() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const res = await fetch("/api/create_listing", {
      method: "POST",
      body: data,
    });

    console.log(res);
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <Container
        style={{
          backgroundColor: "#f1f1f1",
          height: "auto",
          width: "50%",
          margin: "auto",
          marginTop: "20px",
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

        <RadioGroup
          name="type"
          aria-labelledby="radiohead"
          aria-orientation="horizontal"
          row
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

        <Typography
          fontSize={"20px"}
          fontWeight={"bold"}
          style={{ marginTop: "20px" }}
        >
          Add a title
        </Typography>
        <TextField
          name="title"
          fullWidth
          style={{ marginTop: "10px" }}
          InputProps={{
            style: { background: "white" },
          }}
        />
        <Typography
          fontSize={"20px"}
          fontWeight={"bold"}
          style={{ marginTop: "20px" }}
        >
          Choose a category
        </Typography>
        <Select
          name="category"
          label="Category"
          style={{
            background: "white",
            marginTop: "10px",
            width: "50%",
          }}
        >
          <MenuItem value="cats">Cats</MenuItem>
          <MenuItem value="black-cats">Black Cats</MenuItem>
          <MenuItem value="awesome-cats">Awesome Cats</MenuItem>
        </Select>
        <Typography
          fontSize={"20px"}
          fontWeight={"bold"}
          style={{ marginTop: "20px" }}
        >
          Add images
        </Typography>
        <input
          type="file"
          style={{ marginTop: "10px" }}
          accept="image/*"
          name="image"
        />
        <Typography
          fontSize={"20px"}
          fontWeight={"bold"}
          style={{ marginTop: "20px" }}
        >
          Add a description
        </Typography>
        <TextField
          name="description"
          multiline
          rows={4}
          style={{ marginTop: "10px", width: "100%" }}
          InputProps={{
            style: { background: "white" },
          }}
        />
        <Button style={{ marginTop: "20px" }} type="submit">
          <Typography>List it!</Typography>
        </Button>
      </Container>
    </form>
  );
}
