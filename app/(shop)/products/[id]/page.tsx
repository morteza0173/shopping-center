import LoadingSingleProduct from "@/components/global/LoadingSinglePageProduct";
import SingleProductPageDetail from "@/components/products/SingleProductPage";
import { Suspense } from "react";
type Params = Promise<{ id: string }>;
async function SingleProductPage(props: { params: Params }) {
  const { id: paramsId } = await props.params;
  return (
    <>
      <Suspense fallback={<LoadingSingleProduct />}>
        <SingleProductPageDetail paramsId={paramsId} />
      </Suspense>
    </>
  );
}
export default SingleProductPage;
