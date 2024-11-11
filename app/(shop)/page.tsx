import LoadingFeaturedProducts from "@/components/global/LoadingFeaturedProducts";
import LoadingProductGrid from "@/components/global/LoadingProductGrid";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";
import NewPeoducts from "@/components/home/NewPeoducts";
import { Suspense } from "react";

function page() {
  return (
    <>
      <Hero />
      <Suspense fallback={<LoadingFeaturedProducts />}>
        <FeaturedProducts/>
      </Suspense>
      <Suspense
        fallback={<LoadingProductGrid sectionTitle="جدیدترین محصولات" />}
      >
        <NewPeoducts />
      </Suspense>

    </>
  );
}
export default page;
