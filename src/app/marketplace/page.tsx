import { Product } from "@/types/product";
import { getAllProducts } from "@/lib/products";
import MarketplaceClient from "../components/marketplace/MarketplaceClient";

export default async function MarketplacePage() {
  const products: Product[] = await getAllProducts();

  return <MarketplaceClient products={products} />
}
