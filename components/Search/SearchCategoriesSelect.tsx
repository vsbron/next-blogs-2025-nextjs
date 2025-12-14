/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control, Controller } from "react-hook-form";

import FormGroup from "@/components/form/FormGroup";
import { FilterFormValues } from "@/components/Search/SearchForm";
import { Label } from "@/components/ui/label";

import { POST_CATEGORIES } from "@/utils/constants";

// Props type
type SearchCategoriesSelectProps = {
  control: Control<FilterFormValues, any, FilterFormValues>;
  selectedCats: string[];
};

// The Component
function SearchCategoriesSelect({
  control,
  selectedCats,
}: SearchCategoriesSelectProps) {
  // Returned JSX
  return (
    <FormGroup className="max-w-full">
      <Label className="gap-1">
        Categories{" "}
        <span className="hidden lg:inline-block">
          (select multiple with Ctrl key)
        </span>
      </Label>
      <Controller
        name="category"
        control={control}
        render={({ field }) => (
          <div className="flex flex-col border rounded-md w-full h-28 xs:h-40 sm:h-50 md:h-62 overflow-scroll py-0.5">
            {["All", ...POST_CATEGORIES].map((item) => (
              <button
                key={item}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  if (e.ctrlKey) {
                    field.onChange(
                      field.value.includes(item)
                        ? field.value.filter((c) => c !== item)
                        : [...field.value, item]
                    );
                  } else {
                    field.onChange([item]);
                  }
                }}
                className={`text-left py-0.75 px-1.5 sm:py-0.25 sm:px-2 cursor-pointer text-sm sm:text-base ${
                  selectedCats.includes(item) ? "bg-primary/20" : ""
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      />
    </FormGroup>
  );
}

export default SearchCategoriesSelect;
