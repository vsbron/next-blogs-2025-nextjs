import { cn } from "@/lib/utils";

// Props type
type CategoryTag = {
  children: string;
  className?: string;
};

// The component
function CategoryTag({ children, className }: CategoryTag) {
  // Returned JSX
  return (
    <div
      className={cn(
        "absolute z-20 bg-primary shadow border border-border text-white font-bold pt-0.25 pb-0.5 px-2.5 text-xs tracking-0 rounded-md",
        className
      )}
    >
      {children}
    </div>
  );
}

export default CategoryTag;
