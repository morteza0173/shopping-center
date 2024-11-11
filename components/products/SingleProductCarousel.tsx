import { Product } from "@/utils/type";
import {
  Carousel,
  CarouselMainContainer,
  CarouselThumbsContainer,
  SliderMainItem,
  SliderThumbItem,
} from "../ui/carouselImageForSingleProduct";
import Image from "next/image";

function SingleProductCarousel({ product }: { product: Product }) {
  const { images, name } = product;
  return (
    <Carousel
      dir="ltr"
      orientation="vertical"
      className="flex items-center gap-2 justify-center"
    >
      <CarouselMainContainer className="h-60 w-fit ">
        {images.map((image, index) => (
          <SliderMainItem
            key={index}
            className="border border-muted flex items-center justify-center h-52 rounded-md"
          >
            <Image
              src={image.src}
              alt={name}
              height={400}
              width={400}
              className="rounded object-cover p-2"
            />
          </SliderMainItem>
        ))}
      </CarouselMainContainer>

      <CarouselThumbsContainer className="h-60 basis-1/4">
        {images.map((image, index) => (
          <SliderThumbItem
            key={index}
            index={index}
            className="rounded-md bg-transparent"
          >
            <span className="border border-muted flex items-center justify-center h-fit w-full rounded-md cursor-pointer bg-background shadow-md">
              <Image
                src={image.src}
                alt={name}
                width={150}
                height={100}
                className="rounded object-cover p-1"
              />
            </span>
          </SliderThumbItem>
        ))}
      </CarouselThumbsContainer>
    </Carousel>
  );
}
export default SingleProductCarousel;
