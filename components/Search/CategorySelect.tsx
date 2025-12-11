import { Dispatch, SetStateAction } from "react";

import FormGroup from "@/components/form/FormGroup";
import { Label } from "@/components/ui/label";

import { POST_CATEGORIES } from "@/utils/constants";

// Props type
type CategorySelectProps = {
  selected: string[];
  onChange: Dispatch<SetStateAction<string[]>>;
};

// The component
function CategorySelect({ selected, onChange }: CategorySelectProps) {
  // Category select handler
  const handleClick = (
    item: string,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (e.ctrlKey) {
      onChange(
        selected.includes(item)
          ? selected.filter((i: string) => i !== item)
          : [...selected, item]
      );
    } else {
      onChange([item]);
    }
  };

  // Returned JSX
  return (
    <FormGroup className="max-w-full">
      <Label>Categories</Label>
      <div className="flex flex-col border rounded-md w-full h-62 overflow-scroll py-0.5">
        {POST_CATEGORIES.map((item) => (
          <button
            key={item}
            onClick={(e) => handleClick(item, e)}
            className={`text-left py-0.25 px-2 cursor-pointer ${
              selected.includes(item) ? "bg-primary/20" : ""
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </FormGroup>
  );
}

export default CategorySelect;
