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

import { POST_CATEGORIES } from "@/utils/constants";

// Filter type
type FilterFormValues = {
  category: string;
  sort: string;
  popular: boolean;
};

// The Component
function Filters({ searchParams }: { searchParams: ReadonlyURLSearchParams }) {
  // Get the router, pathname and searchParams
  const router = useRouter();
  const pathname = usePathname();

  // Initiate form
  const { handleSubmit, control, reset } = useForm<FilterFormValues>({
    defaultValues: {
      category: searchParams.get("category") || "",
      sort: searchParams.get("sort") || "date_desc",
      popular: !!searchParams.get("popular"),
    },
  });

  // Submit handler
  const onSubmit = (data: FilterFormValues) => {
    // Get the actual params
    const params = new URLSearchParams(searchParams.toString());

    // Get the filters, reset the page
    if (data.category) params.set("category", data.category);
    else params.delete("category");
    if (data.sort) params.set("sort", data.sort);
    else params.delete("sort");
    if (data.popular) params.set("popular", "1");
    else params.delete("popular");
    params.set("page", "1");

    // Redirect user
    router.replace(`${pathname}?${params.toString()}`);
  };
  // Clear handler
  const clearFilters = () => {
    reset({ category: "", sort: "" });
    router.push("/posts");
  };

  // Returned JSX
  return (
    <Card className="mb-8 py-4">
      <CardContent className="px-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-between flex-col md:flex-row items-stretch md:items-center gap-y-4">
            <div className="flex items-center flex-wrap gap-x-6 gap-y-2">
              {/* Category Filter */}
              <FormGroup>
                <Controller
                  name="category"
                  control={control}
                  render={({ field }) => (
                    <Select
                      value={field.value}
                      onValueChange={(val) => field.onChange(val)}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent
                        align="start"
                        className="max-h-80 overflow-y-auto"
                      >
                        <SelectGroup>
                          {POST_CATEGORIES.map((cat) => (
                            <SelectItem key={cat} value={cat}>
                              {cat}
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
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sort By" />
                      </SelectTrigger>
                      <SelectContent align="start">
                        <SelectGroup>
                          <SelectItem value="date_desc">
                            Date (Newest)
                          </SelectItem>
                          <SelectItem value="date_asc">
                            Date (Oldest)
                          </SelectItem>
                          <SelectItem value="likes_desc">
                            Likes (Most)
                          </SelectItem>
                          <SelectItem value="likes_asc">
                            Likes (Least)
                          </SelectItem>
                          <SelectItem value="views_desc">
                            Views (Most)
                          </SelectItem>
                          <SelectItem value="views_asc">
                            Views (Least)
                          </SelectItem>
                          <SelectItem value="title_asc">Title (A-Z)</SelectItem>
                          <SelectItem value="title_desc">
                            Title (Z-A)
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                />
              </FormGroup>
              <FormGroup>
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
                      Popular posts
                    </label>
                  )}
                />
              </FormGroup>
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

export default Filters;
