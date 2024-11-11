import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Skeleton } from "../ui/skeleton";
import SectionTitle from "./SectionTitle";

function LoadingFeaturedProducts() {
  return (
    <section className="pt-24">
      <SectionTitle text="محصولات ویژه" />

      <Carousel dir="rtl">
        <CarouselContent className="mx-10">
          <LoadingProduct />
          <LoadingProduct />
          <LoadingProduct />
          <LoadingProduct />
        </CarouselContent>
        <CarouselPrevious className="-left-4" />
        <CarouselNext className="-right-4" />
      </Carousel>
    </section>
  );
}

function LoadingProduct() {
  return (
    <CarouselItem className="md:basis-1/3 lg:basis-1/4 pt-8">
      <Card>
        <CardContent className="p-4">
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-4 w-3/4 mt-4" />
          <Skeleton className=" h-4 w-3/4 mt-4" />
        </CardContent>
      </Card>
    </CarouselItem>
  );
}

export default LoadingFeaturedProducts;
