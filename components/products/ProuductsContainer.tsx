import { fetchAllProducts } from "@/utils/actions";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { Button } from "../ui/button";
import { LuLayoutGrid, LuList } from "react-icons/lu";
import Link from "next/link";
import { Separator } from "../ui/separator";

async function ProuductsContainer({
  layout,
  search,
}: {
  layout?: string;
  search?: string;
}) {
  // fetch products with filter
  const products = await fetchAllProducts(16, search);
  const totalProducts = products?.length || 0;

  // adding layout function in Url
  const getUpdatedUrl = (newLayout: string) => {
    const params = new URLSearchParams();
    if (layout) params.set("layout", newLayout);
    if (search) params.set("search", search);

    return `/products?${params.toString()}`;
  };

  return (
    <>
      {/* header */}
      <section>
        <div className="flex justify-between items-center">
          <h4 className="font-medium text-lg">
            {totalProducts && totalProducts > 0
              ? `${totalProducts} کالا`
              : "هیچ کالایی موجود نیست"}
          </h4>
          <div className="flex gap-x-4">
            <Button
              variant={layout === "list" ? "default" : "ghost"}
              size="icon"
              asChild
            >
              <Link href={getUpdatedUrl("list")}>
                <LuList />
              </Link>
            </Button>
            <Button
              variant={layout === "grid" ? "default" : "ghost"}
              size="icon"
              asChild
            >
              <Link href={getUpdatedUrl("grid")}>
                <LuLayoutGrid />
              </Link>
            </Button>
          </div>
        </div>
        <Separator className="mt-4" />
      </section>
      {/* products */}
      <div>
        {totalProducts === 0 ? (
          <h5 className="text-2xl mt-16">
            متاسفانه محصولی مطابق با خواسته شما وجود ندارد
          </h5>
        ) : layout === "grid" ? (
          <ProductsGrid products={products || []} layout="pagination" />
        ) : (
          <ProductsList products={products || []} />
        )}
      </div>
    </>
  );
}
export default ProuductsContainer;
