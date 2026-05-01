export type ProductImage = {
  url: string;
  altText: string;
};

export type ProductPromotion = {
  name: string;
  percentage: number;
};

export type Product = {
  articleNumber: string;
  gtin: string;
  url: string;
  image: ProductImage;
  title: string;
  description: string;
  brandName: string;
  brandLogo: string;
  price: number;
  promotion?: ProductPromotion | null;
};

export type Logo = {
  url: string;
  altText: string;
};

export type ProductsResponse = {
  title: string;
  logo: Logo;
  products: Product[];
};
