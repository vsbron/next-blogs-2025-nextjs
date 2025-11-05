import SkeletonPostsGrid from "@/components/skeletons/SkeletonPostsGrid";
import { Skeleton } from "@/components/ui/skeleton";

function SkeletonProfileStats() {
  // Returned JSX
  return (
    <div className="pt-1">
      <Skeleton className="h-5 w-40 mb-2" />
      <Skeleton className="h-5 w-40 mb-8" />
      <Skeleton className="h-7 w-60 mb-4" />
      <SkeletonPostsGrid />
    </div>
  );
}

export default SkeletonProfileStats;
