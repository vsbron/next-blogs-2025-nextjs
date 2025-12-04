import ArticleLayout from "@/components/ArticleLayout";
import { Skeleton } from "@/components/ui/skeleton";

function SkeletonSearch() {
  // Returned JSX
  return (
    <ArticleLayout sidebar={<SkeletonSidebar />}>
      <Skeleton className="h-44 xs:h-60 md:h-70 lg:h-105 mb-6" />
      <Skeleton className="h-20 mb-4" />
      <Skeleton className="h-20" />
    </ArticleLayout>
  );
}

function SkeletonSidebar() {
  // Returned JSX
  return (
    <div className="flex flex-col gap-8">
      <Skeleton className="h-40" />
      <Skeleton className="h-30" />
      <Skeleton className="h-20" />
    </div>
  );
}

export default SkeletonSearch;
