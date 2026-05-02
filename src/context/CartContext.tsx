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
  addToCart: () => Promise<void>;
};

const CartContext = createContext<CartContextValue | null>(null);

async function fakeAddToCartRequest(): Promise<{ success: boolean }> {
  try {
    await fetch("api/carts/123/product/1241", { method: "POST" });
  } catch {
    // mock request
  }

  await new Promise((resolve) => setTimeout(resolve, 800));

  return { success: true };
}

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [itemCount, setItemCount] = useState(0);

  const addToCart = useCallback(async () => {
    const { success } = await fakeAddToCartRequest();
    if (success) {
      setItemCount((prev) => prev + 1);
    }
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
