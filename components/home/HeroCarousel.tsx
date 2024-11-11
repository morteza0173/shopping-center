import { fetchAllProducts } from "@/utils/actions";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Product } from "@/utils/type";
import Link from "next/link";

async function HeroCarousel() {
  const products: Product[] | undefined = await fetchAllProducts(4);


  return (
    <div className="hidden lg:flex ml-6">
      <Carousel dir="rtl" className="w-full">
        <CarouselContent>
          {products?.map((product) => {
            const { id, name, images } = product;
            const firstImage = images[0]?.src;
            return (
              <CarouselItem key={id}>
                <Card className="p-1">
                  <CardContent className="relative flex aspect-square items-center justify-center p-1">
                    <Image
                      src={firstImage}
                      alt={name}
                      width={768}
                      height={768}
                      className="w-full h-full rounded-md object-cover"
                    />
                    <div className=" absolute bottom-0 p-1 w-full">
                      <Link href={`/products/${id}`}>
                        <div className=" bg-zinc-600 bg-opacity-80 h-24 w-full rounded-b">
                          <p className=" text-white p-2">{name}</p>
                        </div>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
export default HeroCarousel;
