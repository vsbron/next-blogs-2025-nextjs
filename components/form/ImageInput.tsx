/* eslint-disable @typescript-eslint/no-explicit-any */
import FormGroup from "./FormGroup";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Props type
type ImageInputProps = React.ComponentProps<"input"> & {
  error?: string;
  label: string;
  setValue: any;
};

function ImageInput({ error, setValue, ...props }: ImageInputProps) {
  // Name for the image id & name
  const name = "imageUrl";

  // Returned JSX
  return (
    <FormGroup>
      <Label htmlFor={name} className="capitalize">
        {props.label}
      </Label>
      <Input
        id={name}
        name={name}
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) setValue("imageUrl", file, { shouldValidate: true });
        }}
        required
      />
      {error && <span className="text-primary text-sm">{error}</span>}
    </FormGroup>
  );
}

export default ImageInput;
