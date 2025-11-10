import { Skeleton } from "../ui/skeleton";

function SkeletonEditPost() {
  // Returned JSX
  return (
    <div className="basic-form">
      <div>
        <Skeleton className="h-4 w-16 mb-1.5" />
        <Skeleton className="h-9 w-full sm:w-96" />
      </div>
      <div>
        <Skeleton className="h-4 w-16 mb-1.5" />
        <Skeleton className="h-9 w-full sm:w-96" />
      </div>
      <div>
        <Skeleton className="h-4 w-16 mb-1.5" />
        <Skeleton className="h-40 w-full" />
      </div>
    </div>
  );
}

export default SkeletonEditPost;
