import { NextRequest } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const newData = await prisma.newItem.findMany({});

    if (!newData) {
      return new Response(JSON.stringify({ error: "newItem not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(newData), {
      status: 200,
    });
  } catch (error) {
    console.error("GET /api/newItem error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
