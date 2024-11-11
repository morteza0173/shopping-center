import { FaStar } from "react-icons/fa";

function ProductsRaing({ productId }: { productId: string }) {
  const rating = 4.2;
  const count = 25;
  console.log(productId);

  return (
    <span className="flex gap-1 items-center mt-1 mb-4">
      <FaStar className="h-3 w-3" />
      {rating} امتیاز - {count} رای
    </span>
  );
}
export default ProductsRaing;
