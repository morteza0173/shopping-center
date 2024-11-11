import ProuductsContainer from "@/components/products/ProuductsContainer";

async function ProductsPage({
  searchParams = Promise.resolve({}),
}: {
  searchParams?: Promise<{ layout?: string; search?: string }>;
}) {
  const { layout = "grid", search = "" } = await searchParams;

  return <ProuductsContainer layout={layout} search={search} />;
}
export default ProductsPage;
