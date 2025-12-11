import { useForm, Controller } from "react-hook-form";
import {
  useRouter,
  usePathname,
  ReadonlyURLSearchParams,
} from "next/navigation";

import { Button } from "@/components/ui/button";
import FormInput from "@/components/form/FormInput";
import { ButtonsContainer } from "@/components/form/Buttons";
import FormGroup from "@/components/form/FormGroup";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

import { POPULAR_POST_LIKES_COUNT } from "@/utils/constants";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import CategoriesSelect from "./CategoriesSelect";

// Filter type
export type FilterFormValues = {
  query: string;
  category: string[];
  sort: string;
  popular: boolean;
};

// Props type
type SearchFormProps = {
  searchParams: ReadonlyURLSearchParams;
  query: string;
};

function SearchForm({ searchParams, query }: SearchFormProps) {
  // Get the router and the pathname
  const router = useRouter();
  const pathname = usePathname();

  // Initiate form
  const { handleSubmit, control, watch } = useForm<FilterFormValues>({
    defaultValues: {
      query,
      category: searchParams.get("category")?.split(",") || [],
      sort: searchParams.get("sort") || "",
      popular: !!searchParams.get("popular"),
    },
  });

  // Submit handler
  const onSubmit = (data: FilterFormValues) => {
    // Get the actual params
    const params = new URLSearchParams(searchParams.toString());

    // Apply query, categories, sorting, popular filter and page
    if (data.query?.trim()) params.set("query", data.query.trim());
    else params.delete("query");
    if (data.category.length > 0)
      params.set("category", data.category.join(","));
    else params.delete("category");
    if (data.sort) params.set("sort", data.sort);
    else params.delete("sort");
    if (data.popular) params.set("popular", "1");
    else params.delete("popular");
    params.set("page", "1");

    // Redirect user
    router.replace(`${pathname}?${params.toString()}`);
  };

  // Watch the categories value
  const selectedCats = watch("category");

  return (
    <Card className="mb-6">
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Left side */}
          <div className="grid grid-cols-[1.25fr_2fr] gap-x-8">
            {/* Categories */}
            <CategoriesSelect control={control} selectedCats={selectedCats} />

            {/* Right side */}
            <div className="flex flex-col gap-y-6">
              {/* Query */}
              <Controller
                name="query"
                control={control}
                render={({ field }) => (
                  <FormInput
                    id="searchQuery"
                    label="Search query"
                    placeholder="Search for articles"
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />

              {/* Sorting */}
              <FormGroup>
                <Label>Sort results</Label>
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

              {/* Popular */}
              <FormGroup>
                <Label>Popular posts only?</Label>
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
                      <span className="text-sm mt-0.5">
                        ({POPULAR_POST_LIKES_COUNT}+ Likes)
                      </span>
                    </label>
                  )}
                />
              </FormGroup>

              {/* Buttons */}
              <ButtonsContainer className="m-0">
                <Button type="submit">Search</Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.push("/search")}
                >
                  Clear
                </Button>
              </ButtonsContainer>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default SearchForm;
