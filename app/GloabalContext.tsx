"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

// تعریف نوع داده‌های Context
interface GlobalContextType {
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

// مقدار اولیه (Default Value)
const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

// ایجاد Provider
export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  return (
    <GlobalContext.Provider value={{ loggedIn, setLoggedIn }}>
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
