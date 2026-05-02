"use client";
import { useCart } from "@/context/CartContext";
import styles from "./page.module.css";

export default function CartPage() {
  const { itemCount } = useCart();
  return (
    <div className={styles.content}>
      <h1>Coming Soon....</h1>
      <p>Items in cart: {itemCount}</p>
    </div>
  );
}
