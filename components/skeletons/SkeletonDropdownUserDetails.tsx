import { Skeleton } from "@/components/ui/skeleton";

function SkeletonDropdownUserDetails() {
  // Returned JSX
  return (
    <>
      <Skeleton className="h-10 w-10 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-2.5 w-15" />
        <Skeleton className="h-2.5 w-12" />
      </div>
    </>
  );
}

export default SkeletonDropdownUserDetails;
