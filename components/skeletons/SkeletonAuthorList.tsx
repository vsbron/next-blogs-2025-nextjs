import AuthorsGridLayout from "@/components/AuthorPreview/AuthorsGridLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

// Skeleton Posts grid layout
function SkeletonAuthorList() {
  // Returned JSX
  return (
    <AuthorsGridLayout>
      <AuthorPreview />
      <AuthorPreview />
      <AuthorPreview />
      <AuthorPreview />
      <AuthorPreview />
      <AuthorPreview />
    </AuthorsGridLayout>
  );
}

// Helper component
function AuthorPreview() {
  // Returned JSX
  return (
    <Card className="overflow-hidden max-w-90 sm:max-w-full py-3 sm:py-6">
      <CardContent className="grid grid-cols-[100px_1fr] xl:grid-cols-[120px_1fr] items-center gap-4 px-4 sm:px-6">
        <Skeleton className="h-25 w-25 xl:h-30 xl:w-30 rounded-2xl sm:rounded-3xl" />
        <div className="flex flex-col justify-between gap-2">
          <div className="flex flex-col gap-1">
            <Skeleton className="w-30 h-6" />
            <Skeleton className="w-25 h-5" />
          </div>
          <div className="flex flex-col gap-1">
            <Skeleton className="w-35 h-4" />
            <Skeleton className="w-30 h-4" />
            <Skeleton className="w-15 h-4" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default SkeletonAuthorList;
