import { cn } from "@/lib/utils";

// Props type
type ContainerProps = {
  className: string;
  children: React.ReactNode;
};

// The container
function Container({ className, children }: ContainerProps) {
  // Returned JSX
  return <div className={cn("max-w-7xl mx-auto", className)}>{children}</div>;
}

export default Container;
