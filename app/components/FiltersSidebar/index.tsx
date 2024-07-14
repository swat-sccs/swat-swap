"use client";
import { Button, Divider } from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";
import React, { useCallback } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import {
  createFiltersQueryFormSchema,
  CreateFiltersQueryPayload,
} from "@/dtos";
import { zodResolver } from "@hookform/resolvers/zod";
import CategoryFilter from "./CategoryFilter";

const FiltersSidebar = () => {
  const methods = useForm<CreateFiltersQueryPayload>({
    resolver: zodResolver(createFiltersQueryFormSchema),
    defaultValues: {
      category: [],
    },
  });
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const clearSearchParams = useCallback(() => {
    const params = new URLSearchParams(searchParams);

    params.forEach((_, key) => {
      params.delete(key);
    });

    replace(`${pathname}?${params.toString()}`);
  }, [replace, pathname, searchParams]);

  const clearFilters = useCallback(() => {
    methods.reset();
    clearSearchParams();
  }, [methods, clearSearchParams]);

  const handleFormSubmitSuccess = useCallback(
    (data: CreateFiltersQueryPayload) => {
      clearSearchParams();

      const params = new URLSearchParams(searchParams);
      if (data.category.length) {
        params.set("categories", data.category.join(","));
      }

      replace(`${pathname}?${params.toString()}`);
    },
    [searchParams, replace, pathname, clearSearchParams]
  );

  const handleFormSubmitError = useCallback((error: any) => {}, []);

  return (
    <FormProvider {...methods}>
      <div className="flex flex-col overflow-y-auto items-center justify-between w-1/4">
        <form
          className="flex flex-col w-full px-4 space-y-4"
          onSubmit={methods.handleSubmit(
            handleFormSubmitSuccess,
            handleFormSubmitError
          )}
        >
          <div className="flex flex-col w-full">
            <CategoryFilter />
          </div>

          <div className="flex justify-center space-x-4">
            <Button size="small" variant="contained" onClick={clearFilters}>
              Clear
            </Button>
            <Button type="submit" size="small" variant="contained">
              Apply
            </Button>
          </div>
        </form>

        <div className="flex flex-col w-full">
          <Divider />
          <div className="flex float-bottom p-2 pl-4 w-full items-center justify-between">
            <StorefrontIcon />
            <p className="text-right">
              <b>SwatSwap</b>
              <br />
              By <b>SCCS</b>
            </p>
          </div>
        </div>
      </div>
    </FormProvider>
  );
};

export default FiltersSidebar;
