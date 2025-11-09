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
    <Card className="p-0 gap-0 flex flex-row gap-x-4">
      <Skeleton className="w-30 h-30 rounded-none" />
      <div className="flex flex-col gap-y-2 pt-4">
        <Skeleton className="w-60 h-4" />
        <Skeleton className="w-90 h-5" />
        <Skeleton className="w-150 h-4" />
      </div>
    </Card>
  );
}

export default SkeletonPostsList;
