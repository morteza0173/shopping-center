import { featuredProduct } from "@/utils/type";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import Image from "next/image";
import { formatCurrency } from "@/utils/format";
import FavoriteToggleButton from "./FavoriteToggleButton";

import { PiArrowCircleLeftThin } from "react-icons/pi";

function ProductsCurousel({
  products,
  featured,
}: {
  products: featuredProduct[];
  featured?: boolean;
}) {
  return (
    <Carousel dir="rtl">
      <CarouselContent className="mx-10">
        {products.map((product) => {
          const { id, name, price, images } = product;

          const firstImage = images[0].src;

          return (
            <CarouselItem key={id} className="md:basis-1/3 lg:basis-1/4">
              <div className="p-1 group relative">
                <Link href={`/products/${id}`}>
                  <Card className="my-8 transform group-hover:shadow-xl transition-shadow duration-300 md:h-80">
                    <CardContent>
                      <div className="relative h-64 md:h-48 rounded mt-4">
                        <Image
                          src={firstImage}
                          alt={name}
                          fill
                          sizes="(max-with:768x) 100vw ,(max-with:1200px) 50vw,33vw"
                          priority
                          className="rounded w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="mt-4 text-center">
                        <h2 className="text-sm capitalize">{name}</h2>
                        <p className="text-muted-foreground mt-2">
                          {formatCurrency(price)}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
                <div className="absolute top-16 left-10 z-5">
                  <FavoriteToggleButton productId={String(id)} />
                </div>
              </div>
            </CarouselItem>
          );
        })}
        {featured && (
          <CarouselItem className="md:basis-1/3 lg:basis-1/4 flex justify-center items-center">
            <Link
              href="/featured"
              className="group flex flex-col justify-center items-center"
            >
              <PiArrowCircleLeftThin className="w-12 h-12 mb-4 text-blue-200 group-hover:text-blue-300 transition-colors duration-300" />
              <p>مشاهده همه</p>
            </Link>
          </CarouselItem>
        )}
      </CarouselContent>
      <CarouselPrevious className="-left-4" />
      <CarouselNext className="-right-4" />
    </Carousel>
  );
}
export default ProductsCurousel;
