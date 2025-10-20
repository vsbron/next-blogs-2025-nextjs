import { cn } from "@/lib/utils";

// Props type
type ContainerProps = {
  className: string;
  children: React.ReactNode;
};

// The container
function Container({ className, children }: ContainerProps) {
  // Returned JSX
  return (
    <div
      className={cn(
        "max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-8",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Container;
