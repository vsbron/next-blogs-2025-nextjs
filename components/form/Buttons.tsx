import { RxReload } from "react-icons/rx";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

// Button sizes
type btnSize = "default" | "lg" | "sm";

// Container and Submit button props
type ButtonsContainerProps = {
  children: React.ReactNode;
  className?: string;
};
type SubmitButtonProps = {
  className?: string;
  text?: string;
  size?: btnSize;
  isPending: boolean;
};

// Buttons container
export function ButtonsContainer({
  children,
  className,
}: ButtonsContainerProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-start xs:flex-row gap-y-2 gap-x-4 mt-10",
        className
      )}
    >
      {children}
    </div>
  );
}

// Submit button
export function SubmitButton({
  className = "",
  text = "Submit",
  size = "default",
  isPending,
}: SubmitButtonProps) {
  // Returned JSX
  return (
    <Button
      type="submit"
      disabled={isPending}
      className={cn("self-start", className)}
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
