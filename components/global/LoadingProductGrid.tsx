import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import SectionTitle from "./SectionTitle";

function LoadingProductGrid({ sectionTitle }: { sectionTitle: string }) {
  return (
    <section className="pt-24">
      <SectionTitle text={sectionTitle} />
      <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <LoadingProduct />
        <LoadingProduct />
        <LoadingProduct />
        <LoadingProduct />
        <LoadingProduct />
        <LoadingProduct />
        <LoadingProduct />
      </div>
    </section>
  );
}
export default LoadingProductGrid;

function LoadingProduct() {
  return (
    <Card>
      <CardContent className="p-4">
        <Skeleton className="h-48 w-full" />
        <Skeleton className="h-4 w-3/4 mt-4" />
        <Skeleton className=" h-4 w-3/4 mt-4" />
      </CardContent>
    </Card>
  );
}
