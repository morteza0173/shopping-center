"use client";
import { postAddToCart } from "@/utils/actions";
import { SubmitButton } from "../form/Button";
import { useState } from "react";

function AddToCart({ productId }: { productId: string }) {
  const [html, setHtml] = useState<string | undefined>("test");
  console.log(html);

  const addToCartHandler = async () => {
    console.log("Product added to cart:", productId);
    const quantity = "1";
    try {
      const response = await postAddToCart({
        productId,
        quantity,
      });
      console.log(response);
      if (response) {
        setHtml(response?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form action={addToCartHandler}>
        <SubmitButton text="افزودن به سبد خرید" className="mt-8" size="lg" />
      </form>
    </>
  );
}
export default AddToCart;
