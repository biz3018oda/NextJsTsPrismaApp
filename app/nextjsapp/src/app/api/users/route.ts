import { NextRequest } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const number = searchParams.get("number");
    console.log(number);

    if (!number) {
      return new Response(JSON.stringify({ error: "number param is required" }), {
        status: 400,
      });
    }

    const user = await prisma.user.findUnique({
      where: { number },
    });

    if (!user) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(user), {
      status: 200,
    });
  } catch (error) {
    console.error("GET /api/users error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
