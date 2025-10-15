import { NextRequest } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const owner = await prisma.owner.findMany({});

    if (!owner) {
      return new Response(JSON.stringify({ error: "owner not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(owner), {
      status: 200,
    });
  } catch (error) {
    console.error("GET /api/owners error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
