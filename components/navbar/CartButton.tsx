import Link from "next/link";
import { Button } from "../ui/button";
import { LuShoppingBasket } from "react-icons/lu";

async function CartButton() {
  const numItemsInCart = 8;
  return (
    <Button
      variant="outline"
      asChild
      size="icon"
      className="relative flex justify-center items-center"
    >
      <Link href="/cart">
        <LuShoppingBasket />
        <span className="absolute -top-3 -left-3 bg-primary rounded-full h-6 w-6 text-white flex items-center justify-center text-xs">
          <p className="mt-1">{numItemsInCart}</p>
        </span>
      </Link>
    </Button>
  );
}
export default CartButton;
