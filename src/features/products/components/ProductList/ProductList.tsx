import type { Product } from "../../types/types";
import { ProductCard } from "../ProductCard/ProductCard";
import styles from "./ProductList.module.css";

export const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <ul className={styles.productList}>
      {products.map((product) => (
        <li key={product.articleNumber}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
};
