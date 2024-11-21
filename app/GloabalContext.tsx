"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

// تعریف نوع داده‌های Context
interface GlobalContextType {
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  favorites: Record<string, boolean>;
  setFavorite: (productId: string, isFavorite: boolean) => void;
}

// مقدار اولیه (Default Value)
const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

// ایجاد Provider
export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

    const setFavorite = (productId: string, isFavorite: boolean) => {
      setFavorites((prev) => ({
        ...prev,
        [productId]: isFavorite,
      }));
    };

  return (
    <GlobalContext.Provider
      value={{ loggedIn, setLoggedIn, favorites, setFavorite }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// هوک برای دسترسی به Context
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
