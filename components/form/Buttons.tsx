"use client";
import { useFormStatus } from "react-dom";
import { RxReload } from "react-icons/rx";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Button sizes
type btnSize = "default" | "lg" | "sm";

// Submit button props
type SubmitButtonProps = {
  className?: string;
  text?: string;
  size?: btnSize;
  isPending: boolean;
};

// Submit button
export function SubmitButton({
  className = "",
  text = "Submit",
  size = "lg",
  isPending,
}: SubmitButtonProps) {
  // Returned JSX
  return (
    <Button
      type="submit"
      disabled={isPending}
      className={cn("self-start mt-4", className)}
      size={size}
    >
      {isPending ? (
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
