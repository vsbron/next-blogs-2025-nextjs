import PostsListLayout from "@/components/PostsListLayout";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

// Skeleton Posts grid layout
function SkeletonPostsList() {
  // Returned JSX
  return (
    <PostsListLayout>
      <PostPreviewLineSkeleton />
      <PostPreviewLineSkeleton />
      <PostPreviewLineSkeleton />
    </PostsListLayout>
  );
}

// Helper component
function PostPreviewLineSkeleton() {
  // Returned JSX
  return (
    <Card className="p-0 gap-0 grid grid-cols-1 md:grid-cols-[120px_1fr]">
      <Skeleton className="w-30 h-full rounded-none rounded-l-lg hidden md:block" />
      <div className="flex flex-col gap-y-2 p-4">
        <Skeleton className="max-w-60 h-3 md:h-4" />
        <Skeleton className="max-w-40 h-3 md:h-4" />
        <Skeleton className="max-w-90 h-4 md:h-5" />
        <Skeleton className="max-w-150 h-3 md:h-4" />
      </div>
    </Card>
  );
}

export default SkeletonPostsList;
