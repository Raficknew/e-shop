import type { Product } from "../../types/types";
import { ProductCard } from "../ProductCard/ProductCard";
import styles from "./ProductList.module.css";

export const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <ProductCard key={product.articleNumber} product={product} />
      ))}
    </div>
  );
};
