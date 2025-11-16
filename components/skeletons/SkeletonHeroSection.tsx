import { Skeleton } from "@/components/ui/skeleton";

function SkeletonHeroSection() {
  // Returned JSX
  return (
    <div className="grid sm:grid-cols-[.75fr_1fr] lg:grid-cols-2 items-center gap-y-0 gap-x-3 lg:gap-x-4 relative mb-2">
      <Skeleton className="h-50 md:h-90 xl:h-120 mb-1 md:mb-6" />
      <div className="gap-1 sm:gap-3 px-0 sm:px-6 py-4 sm:py-8">
        <Skeleton className="h-5 md:h-7 w-40" />
        <Skeleton className="h-16 md:h-20 w-80 mt-2" />
        <Skeleton className="h-20 md:h-30 w-full mt-3" />
      </div>
    </div>
  );
}
export default SkeletonHeroSection;
