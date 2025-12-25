import MyContentLayout from "@/components/dashboard/MyContentLayout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

// Skeleton Posts grid layout
function SkeletonCommentsList() {
  // Returned JSX
  return (
    <MyContentLayout>
      <MyCommentReview />
      <MyCommentReview />
    </MyContentLayout>
  );
}

// Helper component
function MyCommentReview() {
  // Returned JSX
  return (
    <Card className="pt-0 pb-2 gap-0">
      <CardHeader className="pl-0 pr-4 !pb-0 border-b grid-rows-1">
        <div className="grid grid-cols-[max-content_1fr] gap-3 items-center">
          <Skeleton className="w-20 h-20 xs:w-24 xs:h-24 lg:w-18 lg:h-18 rounded-none rounded-tl-xl" />
          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-50 md:w-80" />
            <Skeleton className="h-4 w-40" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-1 pb-0.5 px-4">
        <Skeleton className="h-4 w-80 max-w-full my-1.5" />
        <Skeleton className="h-4 w-50" />
      </CardContent>
    </Card>
  );
}

export default SkeletonCommentsList;
