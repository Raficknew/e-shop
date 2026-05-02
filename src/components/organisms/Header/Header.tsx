import Image from "next/image";
import { CartIcon } from "@/components/atoms/CartIcon/CartIcon";
import type { Logo } from "@/features/products/types/types";
import styles from "./Header.module.css";

export function Header({ logo }: { logo: Logo }) {
  return (
    <header className={styles.header}>
      <Image
        src={logo.url}
        alt={logo.altText}
        width={120}
        height={40}
        className={styles.logo}
        priority
      />
      <CartIcon />
    </header>
  );
}
