import { Skeleton } from "@/components/ui/skeleton";

// Skeleton profile layout
function SkeletonProfile() {
  // Returned JSX
  return (
    <>
      <div className="flex items-center gap-x-6 mb-4">
        <Skeleton className="w-22 h-22 rounded-full" />
        <div className="flex flex-col gap-3 items-start">
          <Skeleton className="w-25 h-7" />
          <Skeleton className="w-40 h-6" />
        </div>
      </div>
      <Skeleton className="w-full max-w-[473px] h-60 sm:h-[358px]" />
    </>
  );
}

export default SkeletonProfile;
