import { Product } from "@/utils/type";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { formatCurrency } from "@/utils/format";
import FavoriteToggleButton from "./FavoriteToggleButton";

async function ProductsList({ products }: { products: Product[] }) {
  return (
    <div className="mt-12 grid gap-y-8">
      {products.map((product) => {
        const { id, name, price, images, short_description } = product;
        const firstImage = images[0].src;
        return (
          <article key={id} className="group relative">
            <Link href={`/products/${id}`}>
              <Card className="transform group-hover:shadow-xl transition-shadow duration-500">
                <CardContent className="p-4 md:p-8 ">
                  <div className="flex gap-y-4 md:flex-row flex-col md:items-center">
                    <div className="relative h-64 md:h-28 md:w-48">
                      <Image
                        src={firstImage}
                        alt={name}
                        fill
                        sizes="(max-width:768px) 100vw , (max-width:1200px) 50vw , 33vw"
                        priority
                        className="w-full rounded object-cover"
                      />
                    </div>

                    <div>
                      <div className="grid grid-cols-2 mt-4 pr-4">
                        <h2 className="text-xl font-semibold capitalize">
                          {name}
                        </h2>
                        <p className="text-muted-foreground text-xl md:mr-auto">
                          {formatCurrency(price)}
                        </p>
                      </div>
                      <div
                        className="mt-10 pr-4"
                        dangerouslySetInnerHTML={{ __html: short_description }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <div className="absolute top-8 left-8 md:top-4 md:left-4 z-5">
              <FavoriteToggleButton productId={String(id)} />
            </div>
          </article>
        );
      })}
    </div>
  );
}
export default ProductsList;
