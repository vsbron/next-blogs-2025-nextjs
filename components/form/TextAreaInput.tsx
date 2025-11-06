/* eslint-disable @typescript-eslint/no-explicit-any */
import FormGroup from "./FormGroup";
import { Label } from "@/components/ui/label";
import RichTextEditor from "./RichTextEditor";

// Props type
type TextAreaInputProps = React.ComponentProps<"textarea"> & {
  error?: string;
  label?: string;
  control: any;
};

// The component
function TextAreaInput({ error, control, ...props }: TextAreaInputProps) {
  // Destructure some props
  const { id, label } = props;

  // Returned JSX
  return (
    <FormGroup className="max-w-full">
      <Label htmlFor={id} className="capitalize">
        {label || id}
      </Label>
      <RichTextEditor control={control} />
      {error && <span className="text-primary text-sm">{error}</span>}
    </FormGroup>
  );
}

export default TextAreaInput;
