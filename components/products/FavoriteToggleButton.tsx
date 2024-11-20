"use client";
import { FaHeart } from "react-icons/fa";
import { Button } from "../ui/button";
import { CardSignInButton } from "../form/Button";
import { useEffect, useState } from "react";
import { TokensIcon } from "@radix-ui/react-icons";
import { useGlobalContext } from "@/app/GloabalContext";

function FavoriteToggleButton({ productId }: { productId: string }) {
  const { loggedIn } = useGlobalContext();
  const [user, setUser] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    setUser(token || "");
  }, [loggedIn]);
  if (!user) return <CardSignInButton />;
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
