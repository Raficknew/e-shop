import { Header } from "@/components/organisms/Header/Header";
import { ProductList } from "@/features/products/components/ProductList/ProductList";
import { fetchProducts } from "@/features/products/service/productService";
import styles from "./page.module.css";

export default async function Home() {
  const { products, logo } = await fetchProducts();

  if (!products) {
    return <h1>Failed to fetch products retrying...</h1>;
  }

  return (
    <>
      <Header logo={logo} />
      <main className={styles.main}>
        <ProductList products={products} />
      </main>
    </>
  );
}
