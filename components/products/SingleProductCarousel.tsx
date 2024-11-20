// "use client";
// import { Product } from "@/utils/type";
// import { Card, CardContent } from "@/components/ui/card";
// import { type CarouselApi } from "@/components/ui/carousel";

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import Image from "next/image";
// import React from "react";

// function SingleProductCarousel({ product }: { product: Product }) {
//   const [api, setApi] = React.useState<CarouselApi>();
//   const [current, setCurrent] = React.useState(0);
//   const [count, setCount] = React.useState(0);

//   React.useEffect(() => {
//     if (!api) {
//       return;
//     }

//     setCount(api.scrollSnapList().length);
//     setCurrent(api.selectedScrollSnap() + 1);

//     api.on("select", () => {
//       setCurrent(api.selectedScrollSnap() + 1);
//     });
//   }, [api]);

//   const { images, name } = product;
//   return (
//     <>
//       <div className="w-full flex justify-center items-center h-72">
//         <Carousel className="w-10/12 h-72" setApi={setApi}>
//           <CarouselContent>
//             {images.map((image, index) => {
//               return (
//                 <CarouselItem key={index}>
//                   <Card>
//                     <CardContent className="w-full h-full flex items-center justify-center">
//                       <Image
//                         src={image.src}
//                         alt={name}
//                         width={150}
//                         height={150}
//                         className="w-full h-full object-cover mt-4 rounded"
//                       />
//                     </CardContent>
//                   </Card>
//                 </CarouselItem>
//               );
//             })}
//           </CarouselContent>
//         </Carousel>
//       </div>
//       <div className="flex justify-center w-full mt-32">
//         <Carousel className="w-10/12" setApi={setApi}>
//           <CarouselContent>
//             {images.map((image, index) => {
//               return (
//                 <CarouselItem key={index} className="basis-1/3">
//                   <Card>
//                     <CardContent className="flex items-center justify-center">
//                       <img
//                         src={image.src}
//                         alt={name}
//                         className="mt-4 object-cover rounded"
//                       />
//                     </CardContent>
//                   </Card>
//                 </CarouselItem>
//               );
//             })}
//           </CarouselContent>
//           <CarouselPrevious />
//           <CarouselNext />
//         </Carousel>
//       </div>
//     </>
//   );
// }
// export default SingleProductCarousel;

"use client";
import { Product } from "@/utils/type";
import { Card, CardContent } from "@/components/ui/card";
import { type CarouselApi } from "@/components/ui/carousel";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";

function SingleProductCarousel({ product }: { product: Product }) {
  const [mainApi, setMainApi] = React.useState<CarouselApi>();
  const [thumbnailApi, setThumbnailApi] = React.useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (!mainApi || !thumbnailApi) {
      return;
    }

    const syncMainToThumbnail = () => {
      const index = mainApi.selectedScrollSnap();
      setCurrentIndex(index);
      thumbnailApi.scrollTo(index);
    };

    const syncThumbnailToMain = () => {
      const index = thumbnailApi.selectedScrollSnap();
      setCurrentIndex(index);
      mainApi.scrollTo(index);
    };

    mainApi.on("select", syncMainToThumbnail);
    thumbnailApi.on("select", syncThumbnailToMain);

    return () => {
      mainApi.off("select", syncMainToThumbnail);
      thumbnailApi.off("select", syncThumbnailToMain);
    };
  }, [mainApi, thumbnailApi]);

  const handleThumbnailClick = (index: number) => {
    if (mainApi) {
      mainApi.scrollTo(index);
    }
  };

  const { images, name } = product;
  return (
    <>
      {/* Main Carousel */}
      <div className="w-full flex justify-center items-center h-72">
        <Carousel className="w-10/12 h-72" setApi={setMainApi}>
          <CarouselContent>
            {images.map((image, index) => {
              return (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="w-full h-full flex items-center justify-center">
                      <Image
                        src={image.src}
                        alt={name}
                        width={150}
                        height={150}
                        className="w-full h-full object-cover mt-4 rounded"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Thumbnail Carousel */}
      <div className="flex justify-center w-full mt-32">
        <Carousel className="w-10/12" setApi={setThumbnailApi}>
          <CarouselContent>
            {images.map((image, index) => {
              return (
                <CarouselItem
                  key={index}
                  className={`basis-1/3 flex justify-center item`}
                  onClick={() => handleThumbnailClick(index)}
                >
                  <Card>
                    <CardContent
                      className={`flex items-center justify-center  ${
                        currentIndex === index ? "border border-blue-500" : ""
                      } `}
                    >
                      <img
                        src={image.src}
                        alt={name}
                        className="mt-4 object-cover rounded"
                      />
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
    </>
  );
}

export default SingleProductCarousel;
