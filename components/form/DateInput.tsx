/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Control, Controller } from "react-hook-form";

import FormGroup from "@/components/form/FormGroup";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDownIcon } from "lucide-react";

// Props type
type DateInputProps = {
  id: string;
  label?: string;
  control: Control<any>;
  error?: string;
};

// The component
function DateInput({ id, label, control, error }: DateInputProps) {
  // Set state for popover
  const [open, setOpen] = useState(false);

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
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                id={id}
                className="w-48 justify-between font-normal"
              >
                {field.value
                  ? new Date(field.value).toLocaleDateString()
                  : "Select date"}
                <ChevronDownIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto overflow-hidden p-0"
              align="start"
            >
              <Calendar
                mode="single"
                selected={field.value ? new Date(field.value) : undefined}
                defaultMonth={field.value ? new Date(field.value) : undefined}
                captionLayout="dropdown"
                onSelect={(date) => {
                  field.onChange(date ? date.toISOString() : "");
                  setOpen(false);
                }}
              />
            </PopoverContent>
          </Popover>
        )}
      />
      {error && <span className="text-primary text-sm">{error}</span>}
    </FormGroup>
  );
}

export default DateInput;
