import { fetchFeaturedProducts } from "@/utils/actions";
import EmptyList from "../global/EmptyList";
import SectionTitle from "../global/SectionTitle";
import ProductsCurousel from "../products/ProductsCurousel";


async function FeaturedProducts() {
  const products = await fetchFeaturedProducts(6);

  if (products?.length === 0) return <EmptyList />;

  return (
    <section className="pt-24">
      <SectionTitle text="محصولات ویژه" />

        <ProductsCurousel products={products || []} featured={true}/>

    </section>
  );
}
export default FeaturedProducts;
