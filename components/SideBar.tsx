import * as React from "react";

import CategoryIcon from "@mui/icons-material/Category";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import BarChartIcon from "@mui/icons-material/BarChart";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import SellIcon from "@mui/icons-material/Sell";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SortIcon from "@mui/icons-material/Sort";
import WcIcon from "@mui/icons-material/Wc";
import PaymentIcon from "@mui/icons-material/Payment";
import HeightIcon from "@mui/icons-material/Height";

import {
  Box,
  Button,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Divider,
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel,
  Checkbox,
  FormGroup,
} from "@mui/material";

function dropDown(
  name: String,
  icon: React.JSX.Element,
  contents: React.JSX.Element
) {
  const dropDownName = { name } + "dropdown";
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ArrowDropDownIcon />}
        id={dropDownName}
        className="flex"
      >
        {icon}
        <Typography className={" max-w-60 px-2"} noWrap fontWeight="600">
          {name}{" "}
        </Typography>
      </AccordionSummary>

      <AccordionDetails className="border">{contents}</AccordionDetails>
    </Accordion>
  );
}

// this is an example of what kind of prop you could pass into the dropdown
// function to create a dropdown content menu
const placeHolderContent = (
  <Typography color="text.secondary">
    Place Contents of dropdown here
  </Typography>
);

const sortDropdownContent = (
  <RadioGroup className="px-2">
    <FormControlLabel value="recent" control={<Radio />} label="Recent" />
    <FormControlLabel
      value="lowToHigh"
      control={<Radio />}
      label="$ - Low to High"
    />
    <FormControlLabel
      value="highToLow"
      control={<Radio />}
      label="$ - High to Low"
    />
  </RadioGroup>
);

const priceRange = (
  <Box className="flex shadow px-4 py-2 min-h-max items-center">
    <SellIcon />
    <Typography className={"min-w-max px-2"} noWrap fontWeight="600">
      Price:
    </Typography>

    <TextField label="$ Min" size="small" type="number" />
    <Typography className={"min-w-max px-1"} noWrap fontWeight="600">
      –
    </Typography>
    <TextField label="$ Max" size="small" type="number" />
  </Box>
);

// Want extra dropdowns for each broader categories like
const categoriesDropdownContent = (
  <FormGroup>
    {/* Use line below to set pre-checked marks */}
    {/* <FormControlLabel control={<Checkbox defaultChecked />} label="Pre-checked Box" /> */}
    <FormControlLabel control={<Checkbox />} label="Clothing & Accessories" />
    <FormControlLabel control={<Checkbox />} label="Furniture & Decor" />
    <FormControlLabel control={<Checkbox />} label="School Supplies" />
    <FormControlLabel control={<Checkbox />} label="Books" />
    <FormControlLabel control={<Checkbox />} label="Electronics" />
    <FormControlLabel control={<Checkbox />} label="Sports Equipment" />
    <FormControlLabel control={<Checkbox />} label="Musical Instruments" />
    <FormControlLabel control={<Checkbox />} label="Transportation" />
    <FormControlLabel control={<Checkbox />} label="Misc." />
  </FormGroup>
);

const paymentDropdownContent = (
  <FormGroup>
    {/* Use line below to set pre-checked marks */}
    {/* <FormControlLabel control={<Checkbox defaultChecked />} label="Pre-checked Box" /> */}
    <FormControlLabel control={<Checkbox />} label="Cash" />
    <FormControlLabel control={<Checkbox />} label="Paypal" />
    <FormControlLabel control={<Checkbox />} label="Zelle" />
    <FormControlLabel control={<Checkbox />} label="Venmo" />
  </FormGroup>
);

const conditionDropdownContent = (
  <FormGroup>
    {/* Use line below to set pre-checked marks */}
    {/* <FormControlLabel control={<Checkbox defaultChecked />} label="Pre-checked Box" /> */}
    <FormControlLabel control={<Checkbox />} label="Brand New, Unboxed" />
    <FormControlLabel control={<Checkbox />} label="Brand New, Open Box" />
    <FormControlLabel control={<Checkbox />} label="Like New" />
    <FormControlLabel control={<Checkbox />} label="Lightly Used" />
    <FormControlLabel control={<Checkbox />} label="Well Loved" />
    <FormControlLabel control={<Checkbox />} label="Good" />
  </FormGroup>
);

const genderDropdownContent = (
  <FormGroup>
    {/* Use line below to set pre-checked marks */}
    {/* <FormControlLabel control={<Checkbox defaultChecked />} label="Pre-checked Box" /> */}
    <FormControlLabel control={<Checkbox />} label="Women's / Feminine" />
    <FormControlLabel control={<Checkbox />} label="Men's / Masculine" />
    <FormControlLabel control={<Checkbox />} label="Unisex / Genderless" />
  </FormGroup>
);

const sizeDropdownContent = (
  <FormGroup>
    {/* Use line below to set pre-checked marks */}
    {/* <FormControlLabel control={<Checkbox defaultChecked />} label="Pre-checked Box" /> */}
    <FormControlLabel control={<Checkbox />} label="XS" />
    <FormControlLabel control={<Checkbox />} label="S" />
    <FormControlLabel control={<Checkbox />} label="M" />
    <FormControlLabel control={<Checkbox />} label="L" />
    <FormControlLabel control={<Checkbox />} label="XL" />
    <FormControlLabel control={<Checkbox />} label="XXL" />
    <FormControlLabel control={<Checkbox />} label="+3XL" />
  </FormGroup>
);

const colorDropdownContent = (
  <FormGroup>
    {/* Use line below to set pre-checked marks */}
    {/* <FormControlLabel control={<Checkbox defaultChecked />} label="Pre-checked Box" /> */}
    <FormControlLabel control={<Checkbox />} label="Light colors" />
    <FormControlLabel control={<Checkbox />} label="Dark colors" />
    <FormControlLabel control={<Checkbox />} label="Neutral tones" />
    <FormControlLabel control={<Checkbox />} label="Colorful tones" />
    <FormControlLabel control={<Checkbox />} label="Warm colors" />
    <FormControlLabel control={<Checkbox />} label="Cold colors" />
  </FormGroup>
);

// add section for clothing size

export default function SideBar() {
  return (
    <Box
      className="grid content-between w-80 max-h-full overflow-y-auto"
      component="form"
    >
      <Box id="dropdown-Menus" className="w-auto ">
        {dropDown("Sort by: Recent", <SortIcon />, sortDropdownContent)}
        {priceRange}
        {dropDown("Categories", <CategoryIcon />, categoriesDropdownContent)}
        {dropDown("Payment Type", <PaymentIcon />, paymentDropdownContent)}
        {dropDown(
          "Condition: New/Used",
          <BarChartIcon />,
          conditionDropdownContent
        )}
        {dropDown("Apparel Gender: Women's", <WcIcon />, genderDropdownContent)}
        {dropDown("Size", <HeightIcon />, sizeDropdownContent)}
        {dropDown("Color", <ColorLensIcon />, colorDropdownContent)}

        <Box className="flex justify-around p-2">
          <Button>Clear</Button>
          <Button>Apply</Button>
        </Box>
      </Box>

      <Box>
        <Divider />
        <Box className="flex float-bottom p-2 pl-4 w-full items-center justify-between">
          <StorefrontIcon />
          <Typography className="text-right" color="text.secondary">
            <b>SwatSwap</b>
            <br />
            By <b>SCCS</b>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
