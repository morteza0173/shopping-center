import { Product } from "@/utils/type";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { formatCurrency } from "@/utils/format";
import FavoriteToggleButton from "./FavoriteToggleButton";
import { PiArrowCircleLeftThin } from "react-icons/pi";

function ProductsGrid({
  products,
  layout,
}: {
  products: Product[];
  layout: "viewAll" | "pagination";
}) {
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => {
        const { name, id, price, images } = product;
        const firstImage = images[0].src;
        return (
          <article key={id} className="group relative">
            <Link href={`/products/${id}`}>
              <Card className="transform group-hover:shadow-xl transition-shadow duration-500 md:h-80">
                <CardContent className="p-4">
                  <div className="relative h-64 md:h-48 rounded overflow-hidden">
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
                    <p className="text-muted-foreground p-2">
                      {formatCurrency(price)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <div className="absolute top-7 left-7 z-5">
              <FavoriteToggleButton productId={String(id)} />
            </div>
          </article>
        );
      })}
      {layout === "viewAll" ? (
        <article className="h-80">
          <Link
            href="/products"
            className="group flex flex-col justify-center items-center h-80"
          >
            <PiArrowCircleLeftThin className="w-12 h-12 mb-4 text-blue-200 group-hover:text-blue-300 transition-colors duration-300" />
            <p>مشاهده همه</p>
          </Link>
        </article>
      ) : (
        <div>pagination</div>
      )}
    </div>
  );
}
export default ProductsGrid;
