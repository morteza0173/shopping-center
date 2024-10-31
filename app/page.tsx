import FeaturedProducts from "@/components/home/FeaturedProducts";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import NewPeoducts from "@/components/home/NewPeoducts";

function page() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <NewPeoducts />
      <Footer />
    </>
  );
}
export default page;
