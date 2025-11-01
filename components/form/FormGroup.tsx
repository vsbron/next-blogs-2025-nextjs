import { cn } from "@/lib/utils";

function FormGroup({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  // Returned JSX
  return (
    <div
      className={cn("flex flex-col gap-y-2 items-start max-w-100", className)}
    >
      {children}
    </div>
  );
}

export default FormGroup;
