"use client";
import { Controller, useForm } from "react-hook-form";
import {
  ReadonlyURLSearchParams,
  usePathname,
  useRouter,
} from "next/navigation";

import FormGroup from "@/components/form/FormGroup";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { COUNTRIES, GENDERS } from "@/utils/constants";

// Filter type
type FilterFormValues = {
  country: string;
  gender: string;
  sort: string;
  popular: boolean;
};

type AuthorsFiltersProps = {
  searchParams: ReadonlyURLSearchParams;
  closeFn: () => void;
};

// The Component
function AuthorsFilters({ searchParams, closeFn }: AuthorsFiltersProps) {
  // Get the router, pathname and searchParams
  const router = useRouter();
  const pathname = usePathname();

  // Initiate form
  const { handleSubmit, control, reset } = useForm<FilterFormValues>({
    defaultValues: {
      country: searchParams.get("country") || "",
      gender: searchParams.get("gender") || "",
      sort: searchParams.get("sort") || "date_desc",
      popular: !!searchParams.get("popular"),
    },
  });

  // Submit handler
  const onSubmit = (data: FilterFormValues) => {
    // Get the actual params
    const params = new URLSearchParams(searchParams.toString());

    // Get the filters, reset the page
    if (data.country) params.set("country", data.country);
    else params.delete("country");
    if (data.gender) params.set("gender", data.gender);
    else params.delete("gender");
    if (data.sort) params.set("sort", data.sort);
    else params.delete("sort");
    if (data.popular) params.set("popular", "1");
    else params.delete("popular");
    params.set("page", "1");

    // Close Filters, redirect user
    closeFn();
    router.replace(`${pathname}?${params.toString()}`);
  };
  // Clear handler
  const clearFilters = () => {
    reset({ country: "", gender: "", sort: "", popular: false });
    closeFn();
    router.push("/authors");
  };

  // Returned JSX
  return (
    <Card className="mb-8 py-4">
      <CardContent className="px-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-between flex-col md:flex-row items-stretch md:items-center gap-y-4">
            <div className="flex items-center flex-wrap gap-x-6 gap-y-2">
              {/* Country Filter */}
              <FormGroup>
                <Controller
                  name="country"
                  control={control}
                  render={({ field }) => (
                    <Select
                      value={field.value}
                      onValueChange={(val) => field.onChange(val)}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a country" />
                      </SelectTrigger>
                      <SelectContent
                        align="start"
                        className="max-h-80 overflow-y-auto"
                      >
                        <SelectGroup>
                          <SelectItem value={"all"}>All</SelectItem>
                          {COUNTRIES.map((country) => (
                            <SelectItem key={country} value={country}>
                              {country}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                />
              </FormGroup>

              {/* Gender Filter */}
              <FormGroup>
                <Controller
                  name="gender"
                  control={control}
                  render={({ field }) => (
                    <Select
                      value={field.value}
                      onValueChange={(val) => field.onChange(val)}
                    >
                      <SelectTrigger className="w-[200px]">
                        <SelectValue placeholder="Select a gender" />
                      </SelectTrigger>
                      <SelectContent
                        align="start"
                        className="max-h-80 overflow-y-auto"
                      >
                        <SelectGroup>
                          <SelectItem value={"all"}>All</SelectItem>
                          {GENDERS.map((gender) => (
                            <SelectItem key={gender} value={gender}>
                              {gender}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                />
              </FormGroup>

              {/* Sort Filter */}
              <FormGroup>
                <Controller
                  name="sort"
                  control={control}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-50">
                        <SelectValue placeholder="Sort By" />
                      </SelectTrigger>
                      <SelectContent align="start">
                        <SelectGroup>
                          <SelectItem value="name_asc">
                            Sort by Name (A-Z)
                          </SelectItem>
                          <SelectItem value="name_desc">
                            Sort by Name (Z-A)
                          </SelectItem>
                          <SelectItem value="username_asc">
                            Sort by Username (A-Z)
                          </SelectItem>
                          <SelectItem value="username_desc">
                            Sort by Username (Z-A)
                          </SelectItem>
                          <SelectItem value="date_desc">
                            Sort by Date registered (Desc)
                          </SelectItem>
                          <SelectItem value="date_asc">
                            Sort by Date registered (Asc)
                          </SelectItem>
                          <SelectItem value="posts_desc">
                            Sort by Post amount (Desc)
                          </SelectItem>
                          <SelectItem value="posts_asc">
                            Sort by Post amount (Asc)
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                />
              </FormGroup>
              {/* <FormGroup>
                <Controller
                  name="popular"
                  control={control}
                  render={({ field }) => (
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={field.value}
                        onChange={(e) => field.onChange(e.target.checked)}
                      />
                      Popular authors
                    </label>
                  )}
                />
              </FormGroup> */}
            </div>
            <div className="flex justify-end gap-2">
              <Button size="xs" type="submit">
                Apply
              </Button>
              <Button variant="outline" size="xs" onClick={clearFilters}>
                Clear
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default AuthorsFilters;
