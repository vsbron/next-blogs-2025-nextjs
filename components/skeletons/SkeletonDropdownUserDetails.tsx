import { Skeleton } from "@/components/ui/skeleton";

function SkeletonDropdownUserDetails() {
  // Returned JSX
  return (
    <div className="pt-2 pb-4 pl-8 pr-4 flex items-center gap-x-3">
      <Skeleton className="h-10 w-10 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-2.5 w-15" />
        <Skeleton className="h-2.5 w-12" />
      </div>
    </div>
  );
}

export default SkeletonDropdownUserDetails;
