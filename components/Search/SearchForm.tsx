import { useForm, Controller } from "react-hook-form";
import {
  useRouter,
  usePathname,
  ReadonlyURLSearchParams,
} from "next/navigation";

import FormInput from "@/components/form/FormInput";
import { ButtonsContainer } from "@/components/form/Buttons";
import FormGroup from "@/components/form/FormGroup";
import SearchCategoriesSelect from "@/components/Search/SearchCategoriesSelect";
import SearchPostsSort from "@/components/Search/SearchPostsSort";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

import { POPULAR_POST_LIKES_COUNT } from "@/utils/constants";

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
  const { handleSubmit, control, watch, reset } = useForm<FilterFormValues>({
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
    if (!data.category.includes("All") && data.category.length > 0) {
      params.set("category", data.category.join(","));
    } else {
      params.delete("category");
    }
    if (data.sort) params.set("sort", data.sort);
    else params.delete("sort");
    if (data.popular) params.set("popular", "1");
    else params.delete("popular");
    params.set("page", "1");

    // Redirect user
    router.replace(`${pathname}?${params.toString()}`);
  };

  // Clear form handler (Resets fields and redirects user)
  const clearSearchForm = () => {
    reset({ category: [], sort: "", popular: false, query: "" });
    router.push("/search");
  };

  // Watch the categories value
  const selectedCats = watch("category");

  return (
    <Card className="mb-6 max-xs:py-4">
      <CardContent className="max-xs:px-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Left side */}
          <div className="grid grid-cols-1 gap-y-4 xs:gap-y-2 xs:grid-cols-[1.5fr_2fr] sm:grid-cols-[1.25fr_2fr] gap-x-4 xs:gap-x-8">
            {/* Categories */}
            <SearchCategoriesSelect
              control={control}
              selectedCats={selectedCats}
            />

            {/* Right side */}
            <div className="contents xs:flex flex-col gap-y-6">
              {/* Query */}
              <div className="-order-1">
                <Controller
                  name="query"
                  control={control}
                  render={({ field }) => (
                    <FormInput
                      id="searchQuery"
                      label="Search query (In title/preview/author)"
                      placeholder="Search for articles"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
              </div>

              {/* Sorting */}
              <SearchPostsSort control={control} />

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
              <ButtonsContainer className="m-0 flex-row">
                <Button type="submit">Search</Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={clearSearchForm}
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
