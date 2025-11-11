/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control, Controller } from "react-hook-form";

import FormGroup from "@/components/form/FormGroup";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// Props type
type RadioInputProps = {
  id: string;
  label?: string;
  options: string[];
  control: Control<any>;
  error?: string;
};

// The component
function RadioInput({ id, label, options, control, error }: RadioInputProps) {
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
          <RadioGroup
            defaultValue={options[2]}
            onValueChange={field.onChange}
            value={field.value || ""}
            className="flex items-center gap-6"
          >
            {options.map((option) => (
              <div className="flex items-center" key={option}>
                <RadioGroupItem
                  value={option}
                  id={option}
                  className="cursor-pointer"
                />
                <Label
                  htmlFor={option}
                  className="capitalize font-normal cursor-pointer pl-2"
                >
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        )}
      />
      {error && <span className="text-primary text-sm">{error}</span>}
    </FormGroup>
  );
}

export default RadioInput;
