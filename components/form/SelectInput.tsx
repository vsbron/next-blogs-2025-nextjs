import FormGroup from "./FormGroup";
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
  label: string;
};

// The component
function SelectInput({ id, label }: SelectInputProps) {
  // Returned JSX
  return (
    <FormGroup>
      <Label htmlFor={id}>{label}</Label>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Choose your gender" />
        </SelectTrigger>
        <SelectContent align="start">
          <SelectItem value="Male">Male</SelectItem>
          <SelectItem value="Female">Female</SelectItem>
          <SelectItem value="Unknown">Unknown</SelectItem>
        </SelectContent>
      </Select>
    </FormGroup>
  );
}

export default SelectInput;
