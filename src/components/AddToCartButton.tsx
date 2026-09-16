"use client";

import { Product } from "@/data/products";
import { useCart } from "./SiteShell";

export function AddToCartButton({ product }: { product: Product }) {
  const { addProduct } = useCart();
  return (
    <button className="focus-ring rounded-md bg-safety px-5 py-3 font-black uppercase text-night" onClick={() => addProduct(product)}>
      Add to cart
    </button>
  );
}
