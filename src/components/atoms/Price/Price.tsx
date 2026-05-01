import type { ProductPromotion } from "@/features/products/types/types";
import styles from "./Price.module.css";

export const Price = ({
  price,
  promotion,
}: {
  price: number;
  promotion?: ProductPromotion;
}) => {
  if (promotion) {
    const discountedPrice = price * (1 - promotion.percentage / 100);

    return (
      <div className={styles.priceRow}>
        <span className={styles.originalPrice}>{price.toFixed(2)} zł</span>
        <span className={styles.discountedPrice}>
          {discountedPrice.toFixed(2)} zł
        </span>
      </div>
    );
  }

  return (
    <div className={styles.priceRow}>
      <span className={styles.price}>{price.toFixed(2)} zł</span>
    </div>
  );
};
