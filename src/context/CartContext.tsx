"use client";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type CartContextValue = {
  itemCount: number;
  addToCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [itemCount, setItemCount] = useState(0);

  const addToCart = useCallback(() => {
    setItemCount((prev) => prev + 1);
  }, []);

  const value = useMemo(
    () => ({ itemCount, addToCart }),
    [itemCount, addToCart],
  );

  return <CartContext value={value}>{children}</CartContext>;
};

export const useCart = (): CartContextValue => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
