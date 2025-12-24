import { Skeleton } from "@/components/ui/skeleton";

function SkeletonComments() {
  // Returned JSX
  return (
    <section>
      <Skeleton className="h-[182px] w-full mb-6" />
      <Skeleton className="h-25 w-full max-w-[800px]" />
    </section>
  );
}

export default SkeletonComments;
