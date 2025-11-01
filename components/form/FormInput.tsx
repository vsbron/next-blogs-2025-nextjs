import FormGroup from "./FormGroup";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Props type
type FormInputProps = React.ComponentProps<"input"> & {
  error?: string;
  label?: string;
};

// The component
function FormInput({ error, ...props }: FormInputProps) {
  // Destructure some props
  const { id, label } = props;

  // Returned JSX
  return (
    <FormGroup>
      <Label htmlFor={id} className="capitalize">
        {label || id}
      </Label>
      <Input {...props} />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </FormGroup>
  );
}

export default FormInput;
