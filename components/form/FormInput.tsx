import FormGroup from "./FormGroup";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

// Props type
type FormInputProps = React.ComponentProps<"input"> & {
  error?: string;
  label?: string;
  className?: string;
};

// The component
function FormInput({ error, ...props }: FormInputProps) {
  // Destructure some props
  const { id, label, className } = props;

  // Returned JSX
  return (
    <FormGroup>
      <Label htmlFor={id} className="capitalize">
        {label || id}
      </Label>
      <Input {...props} className={cn("bg-white", className)} />
      {error && <span className="text-primary text-sm">{error}</span>}
    </FormGroup>
  );
}

export default FormInput;
