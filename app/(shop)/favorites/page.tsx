"use client";
import { useGlobalContext } from "@/app/GloabalContext";
import LoadingContainer from "@/components/global/LoadingContainer";
import SectionTitle from "@/components/global/SectionTitle";
import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";
import ProductsGrid from "@/components/products/ProductsGrid";
import { Card, CardContent } from "@/components/ui/card";
import { fetchUserFavorites } from "@/utils/actionsClient";
import { formatCurrency } from "@/utils/format";
import { wishList } from "@/utils/type";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function favoritePage() {
  const { favorites } = useGlobalContext();
  const [products, setProducts] = useState<wishList[]>([]);
  const [productFetched, setProductFetched] = useState(false);

  useEffect(() => {
    const fetchFavoriteProduct = async () => {
      try {
        const favorites = await fetchUserFavorites();
        console.log(favorites?.wishlist.length);

        if (favorites) {
          setProducts(favorites.wishlist);
          setProductFetched(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchFavoriteProduct();
  }, [favorites]);

  if (!productFetched) {
    return (
      <>
        <h2 className="text-3xl font-medium my-8">
          درحال دریافت لیست علاقه مندی
        </h2>
        <LoadingContainer />
      </>
    );
  }

  if (products.length === 0 && productFetched) {
    return <SectionTitle text="شما محصولی را در لیست علاقه مندی ندارید" />;
  }

  return (
    <div>
      <SectionTitle text="لیست علاقه مندی ها" />
      <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => {
          const { name, id, price, image } = product;
          const StringPrice = Number(price);

          return (
            <article key={id} className="group relative">
              <Link href={`/products/${id}`}>
                <Card className="transform group-hover:shadow-xl transition-shadow duration-500 md:h-80">
                  <CardContent className="p-4">
                    <div className="relative h-64 md:h-48 rounded overflow-hidden">
                      <Image
                        src={image}
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
                        {typeof StringPrice === "number" &&
                          formatCurrency(StringPrice)}
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
      </div>
    </div>
  );
}
export default favoritePage;
