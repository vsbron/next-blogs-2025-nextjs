import PostsGridLayout from "@/components/PostPreview/PostsGridLayout";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

// Skeleton Posts grid layout
function SkeletonPostsGrid() {
  // Returned JSX
  return (
    <PostsGridLayout>
      <PostPreviewTileSkeleton />
      <PostPreviewTileSkeleton />
      <PostPreviewTileSkeleton />
    </PostsGridLayout>
  );
}

// Helper component
function PostPreviewTileSkeleton() {
  // Returned JSX
  return (
    <Card className="p-0 gap-4 bg-background">
      <Skeleton className="h-40 sm:h-60 rounded-b-none"></Skeleton>
      <div className="px-4 pb-5 flex flex-col gap-3">
        <Skeleton className="h-3.5 w-25"></Skeleton>
        <Skeleton className="h-4.5 w-35 mt-1"></Skeleton>
        <Skeleton className="h-3.5 w-50"></Skeleton>
        <Skeleton className="h-8 w-23.5 mt-3.5"></Skeleton>
      </div>
    </Card>
  );
}

export default SkeletonPostsGrid;
