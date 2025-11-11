/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control, Controller } from "react-hook-form";

import FormGroup from "@/components/form/FormGroup";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Props type
type SelectInputProps = {
  id: string;
  label?: string;
  options: string[];
  control: Control<any>;
  error?: string;
};

// The component
function SelectInput({ id, label, options, control, error }: SelectInputProps) {
  // Returned JSX
  return (
    <FormGroup>
      <Label htmlFor={id} className="capitalize">
        {label || id}
      </Label>
      <Controller
        name={id}
        control={control}
        render={({ field }) => (
          <Select onValueChange={field.onChange} value={field.value || ""}>
            <SelectTrigger>
              <SelectValue placeholder={`Select ${label || id}`} />
            </SelectTrigger>
            <SelectContent align="start" className="max-h-80 overflow-y-auto">
              {options.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
      {error && <span className="text-primary text-sm">{error}</span>}
    </FormGroup>
  );
}

export default SelectInput;
