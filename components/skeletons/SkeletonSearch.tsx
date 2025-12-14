import SkeletonPostsGrid from "@/components/skeletons/SkeletonPostsGrid";
import { Skeleton } from "../ui/skeleton";

function SkeletonSearch() {
  // Returned JSX
  return (
    <>
      <Skeleton className="w-full h-60 xs:h-80 mb-6 xs:mb-13" />
      <SkeletonPostsGrid />;
    </>
  );
}

export default SkeletonSearch;
