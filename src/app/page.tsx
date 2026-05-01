import { ProductList } from "@/features/products/components/ProductList/ProductList";
import { fetchProducts } from "@/features/products/service/productService";
import type { ProductsResponse } from "@/features/products/types/types";
import styles from "./page.module.css";
export default async function Home() {
  const data: ProductsResponse = await fetchProducts();

  return (
    <main className={styles.main}>
      <ProductList products={data.products} />
    </main>
  );
}
