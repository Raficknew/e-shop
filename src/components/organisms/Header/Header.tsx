import { CartIcon } from "@/components/atoms/CartIcon/CartIcon";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <p>Logo</p>
      <CartIcon />
    </header>
  );
}
