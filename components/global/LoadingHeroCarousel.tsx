import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Skeleton } from "../ui/skeleton";

function LoadingHeroCarousel() {
  return (
    <div className="hidden lg:flex ml-6">
      <Carousel dir="rtl" className="w-full">
        <CarouselContent>
          <CarouselItem>
            <Card className="p-1">
              <CardContent className="relative flex aspect-square items-center justify-center p-1">
                <Skeleton className="w-full h-full rounded-md object-cover" />
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
export default LoadingHeroCarousel;
