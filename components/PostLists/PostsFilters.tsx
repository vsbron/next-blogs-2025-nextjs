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
import FormInput from "../form/FormInput";
import { Label } from "../ui/label";

// Filter type
type FilterFormValues = {
  category: string;
  sort: string;
  comments: number;
  likes: number;
};

type PostsFiltersProps = {
  searchParams: ReadonlyURLSearchParams;
  closeFn: () => void;
  url?: string;
};

// The Component
function PostsFilters({
  searchParams,
  closeFn,
  url = "/posts",
}: PostsFiltersProps) {
  // Get the router, pathname and searchParams
  const router = useRouter();
  const pathname = usePathname();

  // Initiate form
  const { handleSubmit, control, reset } = useForm<FilterFormValues>({
    defaultValues: {
      category: searchParams.get("category") || "",
      sort: searchParams.get("sort") || "date_desc",
      comments: Number(searchParams.get("comments")) || 0,
      likes: Number(searchParams.get("likes")) || 0,
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
    if (data.comments) params.set("comments", String(data.comments));
    else params.delete("comments");
    if (data.likes) params.set("likes", String(data.likes));
    else params.delete("likes");
    params.set("page", "1");

    // Close Filters, redirect user
    closeFn();
    router.replace(`${pathname}?${params.toString()}`);
  };
  // Clear handler
  const clearFilters = () => {
    reset({ category: "", sort: "", comments: 0, likes: 0 });
    closeFn();
    router.push(url);
  };

  // Returned JSX
  return (
    <Card className="mb-8 py-4">
      <CardContent className="px-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-between flex-col md:flex-row items-stretch md:items-end gap-y-4">
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
                      <Label>Category</Label>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent
                        align="start"
                        className="max-h-80 overflow-y-auto"
                      >
                        <SelectGroup>
                          <SelectItem value={"all"}>All</SelectItem>
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
                      <Label className="capitalize">Sort by</Label>
                      <SelectTrigger className="w-50">
                        <SelectValue placeholder="Sort By" />
                      </SelectTrigger>
                      <SelectContent align="start">
                        <SelectGroup>
                          <SelectItem value="date_desc">
                            Sort by Date (Newest)
                          </SelectItem>
                          <SelectItem value="date_asc">
                            Sort by Date (Oldest)
                          </SelectItem>
                          <SelectItem value="likes_desc">
                            Sort by Likes (Desc)
                          </SelectItem>
                          <SelectItem value="likes_asc">
                            Sort by Likes (Asc)
                          </SelectItem>
                          <SelectItem value="views_desc">
                            Sort by Views (Desc)
                          </SelectItem>
                          <SelectItem value="views_asc">
                            Sort by Views (Asc)
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
                  name="comments"
                  control={control}
                  render={({ field }) => (
                    <FormInput
                      {...field}
                      type="number"
                      label="Minimum comments"
                      className="w-35"
                      min={0}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  )}
                />
              </FormGroup>
              <FormGroup>
                <Controller
                  name="likes"
                  control={control}
                  render={({ field }) => (
                    <FormInput
                      {...field}
                      type="number"
                      label="Minimum likes"
                      className="w-35"
                      min={0}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
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

export default PostsFilters;
