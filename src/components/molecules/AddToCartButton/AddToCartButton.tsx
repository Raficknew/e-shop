"use client";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import styles from "./AddToCartButton.module.css";
import { HugeiconsIcon } from "@hugeicons/react";
import { Add01Icon } from "@hugeicons/core-free-icons";

export const AddToCartButton = () => {
  const { addToCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);
    try {
      await addToCart();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={styles.button}
      disabled={isLoading}
      aria-label="Add to cart"
    >
      {isLoading ? (
        <span className={styles.spinner} />
      ) : (
        <HugeiconsIcon icon={Add01Icon} />
      )}
    </button>
  );
};
