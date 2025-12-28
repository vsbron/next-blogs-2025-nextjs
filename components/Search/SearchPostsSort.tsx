/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control, Controller } from "react-hook-form";

import FormGroup from "@/components/form/FormGroup";
import { FilterFormValues } from "@/components/Search/SearchForm";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Props type
type SearchPostsSortProps = {
  control: Control<FilterFormValues, any, FilterFormValues>;
};

// The component
function SearchPostsSort({ control }: SearchPostsSortProps) {
  // Returned JSX
  return (
    <FormGroup>
      <Label>Sort by</Label>
      <Controller
        name="sort"
        control={control}
        render={({ field }) => (
          <Select value={field.value} onValueChange={field.onChange}>
            <SelectTrigger className="w-50">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent align="start">
              <SelectGroup>
                <SelectItem value="date_desc">Date (Newest)</SelectItem>
                <SelectItem value="date_asc">Date (Oldest)</SelectItem>
                <SelectItem value="likes_desc">Likes (Desc)</SelectItem>
                <SelectItem value="likes_asc">Likes (Asc)</SelectItem>
                <SelectItem value="views_desc">Views (Desc)</SelectItem>
                <SelectItem value="views_asc">Views (Asc)</SelectItem>
                <SelectItem value="title_asc">Title (A-Z)</SelectItem>
                <SelectItem value="title_desc">Title (Z-A)</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        )}
      />
    </FormGroup>
  );
}

export default SearchPostsSort;
