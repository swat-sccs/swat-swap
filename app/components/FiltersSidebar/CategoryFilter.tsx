"use client";
import { Accordion, Checkbox } from "@/components";
import { useController, useFormContext } from "react-hook-form";
import { CreateFiltersQueryPayload, ListingCategory } from "@/dtos";
import { IconCategory } from "@tabler/icons-react";

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
    <div className="flex flex-col gap-y-2">
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
    </div>
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
      <Accordion.Item key="categories" value="categories">
        <Accordion.Control icon={<IconCategory />}>
          Categories
        </Accordion.Control>
        <Accordion.Panel>
          <CategoryCheckboxGroup options={CATEGORY_OPTIONS} />
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

export default CategoryFilter;
