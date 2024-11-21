
"use client";
import { useState, useEffect } from "react";
import { toggleFavoriteAction } from "@/utils/actionsClient";

import { CardSubmitButton } from "../form/Button";
import { useGlobalContext } from "@/app/GloabalContext";


type FavoriteToggleFormProps = {
  productId: string;
  isFavorite: boolean;
};

function FavoriteToggleForm({
  productId,
  isFavorite,
}: FavoriteToggleFormProps) {
  const { favorites, setFavorite } = useGlobalContext(); // دسترسی به کانتکست
  const [isFavoriteState, setIsFavoriteState] = useState<boolean | null>(null);

  // بارگذاری وضعیت علاقه‌مندی هنگام دریافت داده‌ها
  useEffect(() => {
    // اگر وضعیت علاقه‌مندی برای این محصول در کانتکست موجود است، آن را بارگذاری می‌کنیم
    setIsFavoriteState(favorites[productId] ?? isFavorite);
  }, [isFavorite, favorites, productId]); // وابسته به isFavorite و favorites

  const toggleActionTest = async () => {
    if (isFavoriteState === null) return;

    try {
      const response = await toggleFavoriteAction({
        productId,
        isFavorite: isFavoriteState,

      });

      if (response === 200) {
        const newFavoriteState = !isFavoriteState;
        setIsFavoriteState(newFavoriteState);

        // به‌روزرسانی کانتکست و ذخیره وضعیت جدید علاقه‌مندی برای این محصول
        setFavorite(productId, newFavoriteState);
      }
    } catch (error) {
      console.error("خطا در تغییر وضعیت علاقه‌مندی", error);
    }
  };

  if (isFavoriteState === null) {
    return <div>در حال بارگذاری...</div>;
  }

  return (
    <form action={toggleActionTest}>
      <CardSubmitButton isFavorite={isFavoriteState} />
    </form>
  );
}

export default FavoriteToggleForm;
