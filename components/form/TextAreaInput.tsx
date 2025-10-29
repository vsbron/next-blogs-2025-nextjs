import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import FormGroup from "./FormGroup";

// Props type
type TextAreaInputProps = {
  id: string;
  label: string;
  placeholder: string;
};

// The component
function TextAreaInput({ id, label, placeholder }: TextAreaInputProps) {
  // Returned JSX
  return (
    <FormGroup>
      <Label htmlFor={id}>{label}</Label>
      <Textarea id={id} placeholder={placeholder} className="resize-none" />
    </FormGroup>
  );
}

export default TextAreaInput;
