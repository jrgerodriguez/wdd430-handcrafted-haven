import { NextRequest, NextResponse } from "next/server";
import { getProductsBySellerId } from "@/lib/seller/product";
import { verifyToken } from "@/lib/jwt";

export async function GET(req: NextRequest) {
    try {
        const authHeader = req.headers.get("authorization");

        if (!authHeader) {
        return NextResponse.json({ error: "No token provided" }, { status: 401 });
        }

        const token = authHeader.replace("Bearer ", "");

        const payload = verifyToken(token);

        if (!payload || typeof payload !== "object" || !("id" in payload)) {
        return NextResponse.json({ error: "Invalid token" }, { status: 401 });
        }

        const seller_id = payload.id;

        const products = await getProductsBySellerId(seller_id);

        return NextResponse.json(products);
    } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        return NextResponse.json({ error: message }, { status: 500 });
    }
}