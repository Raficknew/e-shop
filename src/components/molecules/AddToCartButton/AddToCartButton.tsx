"use client";
import { Add01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import styles from "./AddToCartButton.module.css";

export const AddToCartButton = () => {
  const { addToCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
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
