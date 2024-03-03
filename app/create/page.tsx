"use client";

import React from "react";
import { useState } from "react";
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
  InputAdornment,
  SelectChangeEvent,
} from "@mui/material";

export default function Create() {
  const [formData, setFormData] = useState({
    category: [],
    payment: [],
    condition: "",
    gender: [],
    size: [],
    color: [],
  });

  const handleChange = (e: SelectChangeEvent) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    for (const [key, value] of Object.entries(formData)) {
      data.append(key, JSON.stringify(value));
    }
    const res = await fetch("/api/create_listing", {
      method: "POST",
      body: data,
    });

    // Temporary placeholder for the success message
    if (res.ok) {
      if (window.confirm("Listing created successfully")) {
        window.location.href = "/";
      }
    } else {
      alert("Error creating listing");
    }
  };

  return (
    <form action="" onSubmit={handleSubmit}>
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
        <TextField name="title" fullWidth style={{ marginTop: "10px" }} />

        <Typography
          fontSize={"20px"}
          fontWeight={"bold"}
          style={{ marginTop: "20px" }}
        >
          Add a price
        </Typography>
        <TextField
          name="price"
          type="number"
          style={{ marginTop: "10px", width: "30%" }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
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
        />
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
          Choose a category
        </Typography>
        <Select
          name="category"
          multiple
          style={{
            marginTop: "10px",
            width: "50%",
          }}
          // @ts-ignore
          value={formData.category}
          onChange={handleChange}
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
          Choose a payment type
        </Typography>
        <Select
          name="payment"
          multiple
          style={{
            marginTop: "10px",
            width: "50%",
          }}
          onChange={handleChange}
          //@ts-ignore
          value={formData.payment}
        >
          <MenuItem value="cash">cash</MenuItem>
          <MenuItem value="paypal">PayPal</MenuItem>
          <MenuItem value="zelle">Zelle</MenuItem>
          <MenuItem value="venmo">Venmo</MenuItem>
        </Select>
        <Typography
          fontSize={"20px"}
          fontWeight={"bold"}
          style={{ marginTop: "20px" }}
        >
          Choose a condition
        </Typography>
        <Select
          name="condition"
          style={{
            marginTop: "10px",
            width: "50%",
          }}
          onChange={handleChange}
          //@ts-ignore
          value={formData.condition}
        >
          <MenuItem value="clothing_accessories">
            clothing & accessories
          </MenuItem>
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
          name="gender"
          multiple
          style={{
            marginTop: "10px",
            width: "50%",
          }}
          //@ts-ignore
          value={formData.gender}
          onChange={handleChange}
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
          name="size"
          multiple
          style={{
            marginTop: "10px",
            width: "50%",
          }}
          onChange={handleChange}
          //@ts-ignore
          value={formData.size}
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
        <Typography
          fontSize={"20px"}
          fontWeight={"bold"}
          style={{ marginTop: "20px" }}
        >
          Choose a color
        </Typography>
        <Select
          name="color"
          multiple
          style={{
            marginTop: "10px",
            width: "50%",
          }}
          onChange={handleChange}
          //@ts-ignore
          value={formData.color}
        >
          <MenuItem value="clothing & accessories">
            clothing & accessories
          </MenuItem>
          <MenuItem value="light tones">light</MenuItem>
          <MenuItem value="dark tones">dark</MenuItem>
          <MenuItem value="neutral tones">neutral</MenuItem>
          <MenuItem value="colorful tones">colorful</MenuItem>
          <MenuItem value="warm tones">warm</MenuItem>
          <MenuItem value="cool tones">cool</MenuItem>
        </Select>

        <Button style={{ marginTop: "20px" }} type="submit">
          <Typography>List it!</Typography>
        </Button>
      </Container>
    </form>
  );
}
