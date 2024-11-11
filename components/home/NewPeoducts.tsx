import { fetchAllProducts } from "@/utils/actions";
import EmptyList from "../global/EmptyList";
import SectionTitle from "../global/SectionTitle";
import ProductsGrid from "../products/ProductsGrid";


async function NewPeoducts() {
  const products = await fetchAllProducts(11);

  if (products?.length === 0) return <EmptyList />;
  return (
    <section className="pt-12">
      <SectionTitle text="جدیدترین محصولات" />

      <ProductsGrid products={products || []} layout="viewAll" />
    </section>
  );
}
export default NewPeoducts;
