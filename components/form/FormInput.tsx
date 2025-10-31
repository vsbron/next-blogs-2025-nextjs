import FormGroup from "./FormGroup";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Props type
type FormInputProps = {
  type?: string;
  id: string;
  label?: string;
  placeholder?: string;
  defaultValue?: string;
};

// The component
function FormInput({
  type = "text",
  id,
  label,
  placeholder,
  defaultValue,
}: FormInputProps) {
  // Returned JSX
  return (
    <FormGroup>
      <Label htmlFor={id} className="capitalize">
        {label || id}
      </Label>
      <Input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        required
      />
    </FormGroup>
  );
}

export default FormInput;
