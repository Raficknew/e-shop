import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-SHOP",
  description: "Your favourite shop around the globe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={figtree.variable}>
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
