import Image from "next/image";

import FormGroup from "@/components/form/FormGroup";
import { Label } from "@/components/ui/label";

function CurrentImage({ imageUrl }: { imageUrl: string }) {
  // Returned JSX
  return (
    <FormGroup>
      <Label>Current Image</Label>
      <div className="relative w-60 h-32">
        <Image
          src={imageUrl}
          alt="Current image"
          fill
          className="object-cover rounded-sm"
          priority
        />
      </div>
    </FormGroup>
  );
}

export default CurrentImage;
