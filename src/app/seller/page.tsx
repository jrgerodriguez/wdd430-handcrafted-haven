import { cookies } from "next/headers";
import { verifyToken } from "@/lib/jwt";


export default async function MyProductsPage() {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    const payload = verifyToken(token);
    

    return <p>Hello {payload.first_name}</p>
}