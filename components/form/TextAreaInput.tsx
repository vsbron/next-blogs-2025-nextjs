import FormGroup from "./FormGroup";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// Props type
type TextAreaInputProps = {
  id: string;
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  height?: string;
};

// The component
function TextAreaInput({
  id,
  label,
  placeholder,
  defaultValue,
  height = "75",
}: TextAreaInputProps) {
  // Returned JSX
  return (
    <FormGroup>
      <Label htmlFor={id} className="capitalize">
        {label || id}
      </Label>
      <Textarea
        id={id}
        name={id}
        className={"resize-none"}
        style={{ height: `${height}px` }}
        placeholder={placeholder}
        defaultValue={defaultValue}
        required
      />
    </FormGroup>
  );
}

export default TextAreaInput;
