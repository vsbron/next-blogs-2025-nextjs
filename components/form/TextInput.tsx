import { Input } from "../ui/input";
import { Label } from "../ui/label";
import FormGroup from "./FormGroup";

// Props type
type TextInputProps = {
  type?: string;
  id: string;
  label: string;
  placeholder: string;
};

// The component
function TextInput({ type = "text", id, label, placeholder }: TextInputProps) {
  // Returned JSX
  return (
    <FormGroup>
      <Label htmlFor={id}>{label}</Label>
      <Input type={type} id={id} placeholder={placeholder} />
    </FormGroup>
  );
}

export default TextInput;
