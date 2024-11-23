import LoadingSingleProduct from "@/components/global/LoadingSinglePageProduct";
import SectionTitle from "@/components/global/SectionTitle";
import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";
import ProductAttributesIdZero from "@/components/products/ProductAttributesIdZero";
import ProductDetailsTab from "@/components/products/ProductDetailsTab";
import ProductsCurousel from "@/components/products/ProductsCurousel";
import SingleProductCarousel from "@/components/products/SingleProductCarousel";
import AddToCart from "@/components/single-product/AddToCart";
import BreadCrumbs from "@/components/single-product/BreadCrumbs";
import ProductsRaing from "@/components/single-product/ProductsRaing";
import { Separator } from "@/components/ui/separator";
import { fetchAllCategories, fetchSingleProduct } from "@/utils/actions";
import { formatCurrency } from "@/utils/format";
import { categories } from "@/utils/type";
import { Suspense } from "react";

async function SingleProductPageDetail({ paramsId }: { paramsId: string }) {
  const fetchProduct = await fetchSingleProduct(paramsId);

  if (fetchProduct) {
    const { product, relatedProducts } = fetchProduct;
    const { id, name, price, short_description } = product;
    const categories = (await fetchAllCategories()) as categories[];

    return (
      <Suspense fallback={<LoadingSingleProduct />}>
        <section>
          {/* product category */}
          <BreadCrumbs product={product} categories={categories} />
          <Separator className="mt-8" />
          <div className="mt-8 grid gap-y-8 lg:grid-cols-5 lg:gap-x-4  justify-center">
            {/* Image */}
            <div className="lg:col-span-2">
              <SingleProductCarousel product={product} />
            </div>
            {/* product Info */}
            <div className="lg:col-span-3">
              <div className="flex gap-x-8 items-center">
                <h1 className="capitalize text-xl font-bold">{name}</h1>
                <FavoriteToggleButton productId={String(id)} />
              </div>
              <ProductsRaing productId={String(id)} />
              <div
                className="mt-6 text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: short_description }}
              />
              <ProductAttributesIdZero product={product} numberOfShowing={4} />
              <Separator className="mt-6" />
              <p className="mt-6 bg-muted p-2 px-4 rounded inline-block ">
                {formatCurrency(price)}
              </p>
              <div>
                <AddToCart productId={String(id)} />
              </div>
            </div>
          </div>
          <SectionTitle text="توضیحات بیشتر" />
          <ProductDetailsTab product={product} />

          {relatedProducts.length > 0 && (
            <>
              <SectionTitle text="محصولات مرتبط" />
              <ProductsCurousel products={relatedProducts} />
            </>
          )}
        </section>
      </Suspense>
    );
  } else {
    //باید این بخش کامل شود
    console.error("Product not found or an error occurred");
    return (
      <Suspense fallback={<LoadingSingleProduct />}>
        <div>محصول مورد نظر پیدا نشد</div>
      </Suspense>
    );
  }
}
export default SingleProductPageDetail;
