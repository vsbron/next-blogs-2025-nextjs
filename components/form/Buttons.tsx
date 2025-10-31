"use client";
import { useFormStatus } from "react-dom";
import { RxReload } from "react-icons/rx";

import { Button } from "@/components/ui/button";

// Button sizes
type btnSize = "default" | "lg" | "sm";

// Submit button props
type SubmitButtonProps = {
  className?: string;
  text?: string;
  size?: btnSize;
};

// Submit button
export function SubmitButton({
  className = "",
  text = "Submit",
  size = "default",
}: SubmitButtonProps) {
  // Get the current form status
  const { pending } = useFormStatus();

  // Returned JSX
  return (
    <Button type="submit" disabled={pending} className={className} size={size}>
      {pending ? (
        <>
          <RxReload className="mr-2 h-4 w-4 animate-spin" />
          Please wait...
        </>
      ) : (
        text
      )}
    </Button>
  );
}
