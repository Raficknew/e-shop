import styles from "./page.module.css";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  return (
    <article className={styles.content}>
      <h1>Product Page</h1>
      <p>Product ID: {productId}</p>
      <h3>Coming Soon...</h3>
    </article>
  );
}
