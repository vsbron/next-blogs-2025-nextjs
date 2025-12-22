import { cn } from "@/lib/utils"

function SectionSeparator({className}: {className?: string}) {
  // Returned JSX
  return (
    <div className={cn("border-b border-border/50 mt-4 sm:mt-7 mb-1 sm:mb-4", className)} />
  );
}

export default SectionSeparator;
