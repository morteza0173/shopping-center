import { Separator } from "@/components/ui/separator";
import { Skeleton } from "../ui/skeleton";
import { Card, CardContent } from "../ui/card";

function LoadingSingleProduct() {
  return (
    <section>
      {/* product category */}
      <Skeleton className="w-full h-10" />
      <Separator className="mt-8" />
      <div className="mt-8 grid gap-y-8 lg:grid-cols-5 lg:gap-x-4  justify-center">
        {/* Image */}
        <div className="lg:col-span-2">
          <div className="w-screen lg:w-full flex justify-center items-center h-72">
            <Card className="w-10/12 h-72">
              <CardContent className="w-full h-full flex items-center justify-center">
                <Skeleton className="w-full h-full object-cover mt-4 rounded" />
              </CardContent>
            </Card>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="w-10/12 grid grid-cols-3">
              <Card className="mt-4 col-span-1">
                <CardContent className="justify-center items-center">
                  <Skeleton className="mt-4 h-20 object-cover rounded" />
                </CardContent>
              </Card>
              <Card className="mt-4 col-span-1">
                <CardContent className="justify-center items-center">
                  <Skeleton className="mt-4 h-20 object-cover rounded" />
                </CardContent>
              </Card>
              <Card className="mt-4 col-span-1">
                <CardContent className="justify-center items-center">
                  <Skeleton className="mt-4 h-20 object-cover rounded" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        {/* product Info */}
        <div className="col-span-3">
          <div className="flex gap-x-8 items-center">
            <Skeleton className="w-full h-8" />
          </div>
          <Skeleton className="w-3/12 h-8 mt-4" />
          <Skeleton className="w-full h-72 mt-4" />
        </div>
      </div>
    </section>
  );
}
export default LoadingSingleProduct;
