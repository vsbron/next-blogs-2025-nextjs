import FormGroup from "./FormGroup";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// Props type
type TextAreaInputProps = React.ComponentProps<"textarea"> & {
  error?: string;
  label?: string;
  height?: string;
};

// The component
function TextAreaInput({ error, ...props }: TextAreaInputProps) {
  // Destructure some props
  const { id, label, height } = props;

  // Returned JSX
  return (
    <FormGroup>
      <Label htmlFor={id} className="capitalize">
        {label || id}
      </Label>
      <Textarea
        {...props}
        className={"resize-none"}
        style={{ height: `${height}px` }}
        required
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </FormGroup>
  );
}

export default TextAreaInput;
