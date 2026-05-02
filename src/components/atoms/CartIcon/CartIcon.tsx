"use client";
import { ShoppingCart02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import styles from "./CartIcon.module.css";

export const CartIcon = () => {
  const { itemCount } = useCart();
  return (
    <Link href="/cart" className={styles.cartIcon}>
      <HugeiconsIcon strokeWidth={1.5} icon={ShoppingCart02Icon} />
      {itemCount > 0 && <span className={styles.itemCount}>{itemCount}</span>}
    </Link>
  );
};
