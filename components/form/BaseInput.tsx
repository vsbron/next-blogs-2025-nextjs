import { Input } from "../ui/input";
import { Label } from "../ui/label";
import FormGroup from "./FormGroup";

// Props type
type BaseInputProps = {
  type?: string;
  id: string;
  label: string;
  placeholder: string;
};

// The component
function BaseInput({ type = "text", id, label, placeholder }: BaseInputProps) {
  // Returned JSX
  return (
    <FormGroup>
      <Label htmlFor={id}>{label}</Label>
      <Input type={type} id={id} placeholder={placeholder} />
    </FormGroup>
  );
}

export default BaseInput;
