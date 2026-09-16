import { products } from "@/data/products";

export const commerce = {
  listProducts: () => products,
  getProduct: (slug: string) => products.find((product) => product.slug === slug)
};
