import { ShoppingCart02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <p>Logo</p>
      <HugeiconsIcon strokeWidth={1.5} icon={ShoppingCart02Icon} />
    </header>
  );
}
