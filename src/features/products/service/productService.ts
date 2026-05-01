import type { ProductsResponse } from "../types/types";

const API_KEY = process.env.API_KEY as string;

export async function fetchProducts(): Promise<ProductsResponse> {
  const response = await fetch(
    "https://1jbod7rtr5.execute-api.eu-central-1.amazonaws.com/prod/exercise",
    {
      headers: {
        "x-api-key": API_KEY,
      },
    },
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`);
  }

  return response.json();
}
