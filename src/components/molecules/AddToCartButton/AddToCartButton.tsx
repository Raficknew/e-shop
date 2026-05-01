"use client";
import { useCart } from "@/context/CartContext";
import styles from "./AddToCartButton.module.css";
import { HugeiconsIcon } from "@hugeicons/react";
import { Add01Icon } from "@hugeicons/core-free-icons";

export const AddToCartButton = () => {
  const { addToCart } = useCart();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart();
  };

  return (
    <button type="button" onClick={handleClick} className={styles.button}>
      <HugeiconsIcon icon={Add01Icon} />
    </button>
  );
};
