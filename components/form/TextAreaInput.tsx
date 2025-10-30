import FormGroup from "./FormGroup";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// Props type
type TextAreaInputProps = {
  id: string;
  label: string;
  placeholder: string;
  height?: string;
};

// The component
function TextAreaInput({
  id,
  label,
  placeholder,
  height = "75",
}: TextAreaInputProps) {
  // Returned JSX
  return (
    <FormGroup>
      <Label htmlFor={id}>{label}</Label>
      <Textarea
        id={id}
        placeholder={placeholder}
        className={"resize-none"}
        style={{ height: `${height}px` }}
      />
    </FormGroup>
  );
}

export default TextAreaInput;
