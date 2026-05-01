import { ProductList } from "@/features/products/components/ProductList/ProductList";
import { fetchProducts } from "@/features/products/service/productService";
import styles from "./page.module.css";
export default async function Home() {
  const { products } = await fetchProducts();

  return (
    <main className={styles.main}>
      <ProductList products={products} />
    </main>
  );
}
