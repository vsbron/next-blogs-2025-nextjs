/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control, Controller } from "react-hook-form";

import FormGroup from "@/components/form/FormGroup";
import { FilterFormValues } from "@/components/Search/SearchForm";
import { Label } from "@/components/ui/label";

import { POST_CATEGORIES } from "@/utils/constants";

// Props type
type CategoriesSelectProps = {
  control: Control<FilterFormValues, any, FilterFormValues>;
  selectedCats: string[];
};

// The Component
function CategoriesSelect({ control, selectedCats }: CategoriesSelectProps) {
  // Returned JSX
  return (
    <FormGroup className="max-w-full">
      <Label>Categories</Label>
      <Controller
        name="category"
        control={control}
        render={({ field }) => (
          <div className="flex flex-col border rounded-md w-full h-62 overflow-scroll py-0.5">
            {POST_CATEGORIES.map((item) => (
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
                className={`text-left py-0.25 px-2 cursor-pointer ${
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

export default CategoriesSelect;
