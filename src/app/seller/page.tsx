import { cookies } from "next/headers";
import { verifyToken } from "@/lib/jwt";
import { getProductsBySellerId } from "@/lib/seller/product";
import { Product } from "@/types/product";
import { JwtPayloadCustom } from "@/types/jwt";

export default async function MyProductsPage() {

  const cookieStore = await cookies();
  const tokenCookie = cookieStore.get("token");
  const token = tokenCookie?.value;

  if (!token) return <p>No token found. Please log in.</p>;

  const verified = verifyToken(token);

  if (typeof verified !== "object" || verified === null || !("id" in verified)) {
    return <p>Invalid token. Please log in again.</p>;
  }

  const payload = verified as JwtPayloadCustom;
  const seller_id = payload.id;
  const first_name = payload.first_name ?? "Seller";

  const products: Product[] = await getProductsBySellerId(Number(seller_id));

  return (
    <div>
      <h1>Hello {first_name}</h1>
      <h2>Your products:</h2>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
