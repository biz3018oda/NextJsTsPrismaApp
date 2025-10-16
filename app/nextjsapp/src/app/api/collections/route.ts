import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const collection = await prisma.collection.findMany();

    if (collection.length === 0) {
      return NextResponse.json({ error: "Collection not found" }, { status: 404 });
    }

    return NextResponse.json(collection, { status: 200 });
  } catch (error) {
    console.error("GET /api/collections error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
