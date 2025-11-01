import FormGroup from "./FormGroup";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Props type
type ImageInputProps = React.ComponentProps<"input"> & {
  error?: string;
  label: string;
};

function ImageInput({ error, ...props }: ImageInputProps) {
  // Name for the image id & name
  const name = "imageUrl";

  // Returned JSX
  return (
    <FormGroup>
      <Label htmlFor={name} className="capitalize">
        {props.label}
      </Label>
      <Input id={name} name={name} type="file" required accept="image/*" />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </FormGroup>
  );
}

export default ImageInput;
