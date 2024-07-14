"use client";
import { ArrowDropDownCircleOutlined } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
} from "@mui/material";
import CategoryIcon from "@mui/icons-material/Category";
import { useController, useFormContext } from "react-hook-form";
import { CreateFiltersQueryPayload, ListingCategory } from "@/dtos";

interface CategoryCheckboxOption {
  label: string;
  category: ListingCategory;
}

interface CheckboxControllerProps {
  options: CategoryCheckboxOption[];
}

const CategoryCheckboxGroup = ({ options }: CheckboxControllerProps) => {
  const { control } = useFormContext<CreateFiltersQueryPayload>();
  const { field } = useController({
    control,
    name: "category",
  });

  return (
    <>
      {options.map((option) => (
        <div key={option.category} className="flex items-center space-x-2">
          <Checkbox
            onChange={() => {
              const categoryChecked = field.value.includes(option.category);

              const updatedCategories = categoryChecked
                ? field.value.filter((v) => v !== option.category)
                : [
                    ...field.value,
                    ...(field.value.includes(option.category)
                      ? []
                      : [option.category]),
                  ];

              field.onChange(updatedCategories);
            }}
            checked={field.value.includes(option.category)}
            value={option.category}
          />
          <p className="m-0">{option.label}</p>
        </div>
      ))}
    </>
  );
};

const CATEGORY_OPTIONS: CategoryCheckboxOption[] = [
  { label: "Clothing & Accessories", category: "clothing" },
  { label: "Furniture", category: "furniture" },
  { label: "Books", category: "books" },
  { label: "Electronics", category: "electronics" },
  { label: "Sports Equipment", category: "sports_equipment" },
  { label: "Musical Instruments", category: "musical_instrument" },
  { label: "Transportation", category: "transportation" },
  { label: "Misc", category: "misc" },
];

const CategoryFilter = () => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ArrowDropDownCircleOutlined />}>
        <CategoryIcon />
        <p className="px-2 font-semibold">Categories</p>
      </AccordionSummary>

      <AccordionDetails className="border">
        <CategoryCheckboxGroup options={CATEGORY_OPTIONS} />
      </AccordionDetails>
    </Accordion>
  );
};

export default CategoryFilter;
