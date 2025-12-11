import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { ReadonlyURLSearchParams } from "next/navigation";

import { ButtonsContainer } from "@/components/form/Buttons";
import FormGroup from "@/components/form/FormGroup";
import FormInput from "@/components/form/FormInput";
import CategorySelect from "@/components/Search/CategorySelect";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { POPULAR_POST_LIKES_COUNT } from "@/utils/constants";

// Filter type
type FilterFormValues = {
  category: string;
  sort: string;
  popular: boolean;
};

// Props type
type SearchFormProps = {
  searchParams: ReadonlyURLSearchParams;
  query: string;
};

// The component
function SearchForm({ searchParams, query }: SearchFormProps) {
  // Create state value for search field and selected categories
  const [searchField, setSearchField] = useState<string>(query);
  const [selectedCats, setSelectedCats] = useState<string[]>([]);

  // Initiate form
  const { handleSubmit, control, reset } = useForm<FilterFormValues>({
    defaultValues: {
      category: searchParams.get("category") || "",
      sort: searchParams.get("sort") || "date_desc",
      popular: !!searchParams.get("popular"),
    },
  });

  // Returned JSX
  return (
    <Card className="mb-6">
      <CardContent>
        <div className="grid grid-cols-[1.25fr_2fr] gap-x-8">
          <div>
            <CategorySelect
              selected={selectedCats}
              onChange={setSelectedCats}
            />
          </div>
          <div className="flex flex-col gap-y-6">
            <FormInput
              id="searchQuery"
              label="Search query"
              value={searchField}
              onChange={(e) => setSearchField(e.target.value)}
            />

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
                        <SelectItem value="title_desc">Title (Z-A)</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
            </FormGroup>

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
            <ButtonsContainer className="m-0">
              <Button type="submit">Search</Button>
              <Button variant="outline">Clear</Button>
            </ButtonsContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default SearchForm;
