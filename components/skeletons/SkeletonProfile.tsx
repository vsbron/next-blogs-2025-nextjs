import { Skeleton } from "@/components/ui/skeleton";

// Skeleton profile layout
function SkeletonProfile() {
  // Returned JSX
  return (
    <>
      <div className="flex items-center gap-x-6 mb-5">
        <Skeleton className="w-22 h-22 rounded-full" />
        <div className="flex flex-col gap-3 items-start">
          <Skeleton className="w-25 h-7" />
          <Skeleton className="w-40 h-6" />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <Skeleton className="w-25 h-6 mb-0.5" />
        <div className="flex gap-6">
          <Skeleton className="w-30 h-5" />
          <Skeleton className="w-40 h-5" />
        </div>
        <div className="flex gap-6">
          <Skeleton className="w-30 h-5" />
          <Skeleton className="w-40 h-5" />
        </div>
      </div>
    </>
  );
}

export default SkeletonProfile;
