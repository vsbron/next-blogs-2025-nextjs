import { Skeleton } from "../ui/skeleton";

// Skeleton profile layout
function SkeletonProfile() {
  // Returned JSX
  return (
    <div className="flex items-center gap-x-6 mb-6">
      <div className="w-22 h-22 relative">
        <Skeleton className="w-22 h-22 rounded-full" />
      </div>
      <div className="flex flex-col gap-3.5 items-start">
        <Skeleton className="w-25 h-6" />
        <Skeleton className="w-40 h-5" />
      </div>
    </div>
  );
}

export default SkeletonProfile;
