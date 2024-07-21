"use client";
import { Button, Divider } from "@/components";
import { useCallback, useMemo } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import {
  createFiltersQueryFormSchema,
  CreateFiltersQueryPayload,
  getListingFiltersSchema,
  ListingFilters,
} from "@/dtos";
import { zodResolver } from "@hookform/resolvers/zod";
import CategoryFilter from "./CategoryFilter";
import { split } from "lodash";
import { IconBuildingStore } from "@tabler/icons-react";

const FiltersSidebar = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const initialListingsFilters = useMemo<ListingFilters>(() => {
    return getListingFiltersSchema.parse({
      category: searchParams.get("category")
        ? split(searchParams.get("category"), ",")
        : [],
    });
  }, [searchParams]);

  const methods = useForm<CreateFiltersQueryPayload>({
    resolver: zodResolver(createFiltersQueryFormSchema),
    defaultValues: {
      ...initialListingsFilters,
    },
  });

  const clearSearchParams = useCallback(() => {
    // params is a mutable version of searchParams
    const params = new URLSearchParams(searchParams);
    params.forEach((_, key) => {
      params.delete(key);
    });

    replace(`${pathname}?${params.toString()}`);
  }, [replace, pathname, searchParams]);

  const clearFilters = useCallback(() => {
    methods.setValue("category", []);
    clearSearchParams();
  }, [methods, clearSearchParams]);

  const handleFormSubmitSuccess = useCallback(
    (data: CreateFiltersQueryPayload) => {
      const params = new URLSearchParams(searchParams);
      if (data.category.length) {
        params.set("category", data.category.join(","));
      } else {
        params.delete("category");
      }

      replace(`${pathname}?${params.toString()}`);
    },
    [searchParams, replace, pathname]
  );

  const handleFormSubmitError = useCallback((error: any) => {}, []);

  return (
    <div className="flex flex-col items-center justify-between w-1/5 px-4">
      <FormProvider {...methods}>
        <form
          className="flex flex-col space-y-4 w-full"
          onSubmit={methods.handleSubmit(
            handleFormSubmitSuccess,
            handleFormSubmitError
          )}
        >
          <div className="flex flex-col">
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
      </FormProvider>

      <div className="flex flex-col w-full">
        <Divider />
        <div className="flex items-center justify-between">
          <IconBuildingStore />
          <p className="m-0">
            <b>SwatSwap</b>
            <br />
            By <b>SCCS</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FiltersSidebar;
