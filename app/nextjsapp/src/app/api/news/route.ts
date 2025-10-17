import { NextRequest } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const news = await prisma.news.findMany({});

    if (!news) {
      return new Response(JSON.stringify({ error: "news not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(news), {
      status: 200,
    });
  } catch (error) {
    console.error("GET /api/news error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
