import { Product } from "@/utils/type";

function ProductAttributesIdZero({
  product,
  numberOfShowing,
}: {
  product: Product;
  numberOfShowing?: number;
}) {
  const { attributes } = product;

  return (
    <>
      <p className="font-medium mt-4">ویژگی ها :</p>
      <div className="flex gap-2 flex-wrap">
        {attributes.map((attribute, index) => {
          if (
            numberOfShowing
              ? attribute.id === 0 && attribute.position < numberOfShowing
              : attribute.id === 0
          ) {
            return (
              <p className="mt-4 bg-muted p-4 rounded text-xs" key={index}>
                {attribute.name} : {attribute.options[0]}
              </p>
            );
          }
          return null;
        })}
      </div>
    </>
  );
}
export default ProductAttributesIdZero;
