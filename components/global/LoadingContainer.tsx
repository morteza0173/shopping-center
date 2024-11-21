import { Skeleton } from "../ui/skeleton";

function LoadingContainer() {
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Skeleton className="w-11/12 h-60" />
      <Skeleton className="w-11/12 h-60" />
      <Skeleton className="w-11/12 h-60" />
      <Skeleton className="w-11/12 h-60" />
      <Skeleton className="w-11/12 h-60" />
      <Skeleton className="w-11/12 h-60" />
      <Skeleton className="w-11/12 h-60" />
      <Skeleton className="w-11/12 h-60" />
    </div>
  );
}
export default LoadingContainer;
