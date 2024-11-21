"use client";
import { FaHeart } from "react-icons/fa";
import { Button } from "../ui/button";
import { CardSignInButton } from "../form/Button";
import { useEffect, useState } from "react";
import { useGlobalContext } from "@/app/GloabalContext";
import { fetchFavoriteId } from "@/utils/actionsClient";
import FavoriteToggleForm from "./FavoriteToggleForm";

function FavoriteToggleButton({ productId }: { productId: string }) {
  const { loggedIn } = useGlobalContext();
  const [user, setUser] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    setUser(token || "");
  }, [loggedIn]);

  useEffect(() => {
    const favoriteId = async () => {
      const id = Number(productId);
      if (!isNaN(id)) {
        const favorite = await fetchFavoriteId({ productId: id });
        if (favorite) {
          setIsFavorite(favorite.is_in_wishlist);
        }
      } else {
        console.error("شناسه محصول نامعتبر است");
      }
    };

    favoriteId();
  }, [productId]);

  if (!user) return <CardSignInButton />;

  return <FavoriteToggleForm isFavorite={isFavorite} productId={productId} />;
}
export default FavoriteToggleButton;
