import { FaHeart } from "react-icons/fa";
import { Button } from "../ui/button";

function FavoriteToggleButton({ productId }: { productId: string }) {
  return (
    <Button
      size="icon"
      variant="outline"
      className="p-2 cursor-pointer w-8 h-8"
    >
      <FaHeart className="w-4 h-4" />
    </Button>
  );
}
export default FavoriteToggleButton;
