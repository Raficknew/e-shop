import { HugeiconsIcon } from "@hugeicons/react"
import styles from "./Header.module.css"
import { ShoppingCart02Icon } from "@hugeicons/core-free-icons"
export function Header () {
    return <div className={styles.header}><p>Logo</p><HugeiconsIcon strokeWidth={1.5} icon={ShoppingCart02Icon} /></div>
}