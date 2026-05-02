import Image from "next/image";
import Link from "next/link";
import { Price } from "@/components/atoms/Price/Price";
import { ProductImage } from "@/components/atoms/ProductImage/ProductImage";
import { AddToCartButton } from "@/components/molecules/AddToCartButton/AddToCartButton";
import type { Product } from "../../types/types";
import styles from "./ProductCard.module.css";

export const ProductCard = ({ product }: { product: Product }) => {
  const hasPromotion =
    product.promotion != null && product.promotion.percentage > 0;

  return (
    <article className={styles.card}>
      <Link
        href={`/products/${product.articleNumber}`}
        className={styles.cardLink}
        aria-label={product.title}
      />

      <div className={styles.imageWrapper}>
        <ProductImage
          src={product.image.url}
          alt={product.image.altText}
          fill
          sizes="(max-width: 600px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className={styles.image}
        />
        {hasPromotion && (
          <span className={styles.badge}>
            <span className={styles.badgePercent}>
              -{product.promotion?.percentage}%
            </span>
            <span className={styles.badgeName}>{product.promotion?.name}</span>
          </span>
        )}
        <AddToCartButton />
      </div>

      <div className={styles.content}>
        <div className={styles.brandRow}>
          <Image
            src={product.brandLogo}
            alt={product.brandName}
            width={60}
            height={16}
            className={styles.brandLogo}
          />
          <span className={styles.brandName}>{product.brandName}</span>
        </div>

        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.description}>{product.description}</p>

        <Price
          price={product.price}
          promotion={product.promotion ?? undefined}
        />
      </div>
    </article>
  );
};
