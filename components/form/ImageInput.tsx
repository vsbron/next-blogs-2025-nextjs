import { Prisma } from "@prisma/client";

import FormGroup from "./FormGroup";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function ImageInput() {
  // Name for the image id & name
  const name = Prisma.UserScalarFieldEnum.imageUrl;

  // Returned JSX
  return (
    <FormGroup>
      <Label htmlFor={name} className="capitalize" />
      <Input id={name} name={name} type="file" required accept="image/*" />
    </FormGroup>
  );
}

export default ImageInput;
