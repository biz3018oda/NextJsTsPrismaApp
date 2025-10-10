import { PrismaClient } from '../../../../src/generated/prisma'
import { NextRequest, NextResponse } from 'next/server'

type User = {
  id: number
  name: string
}

const prisma = new PrismaClient()

// GETリクエストの処理
export async function GET(request: NextRequest) {
  // const users: User[] = [
    // { id: 1, name: 'John Doe' },
    // { id: 2, name: 'Jane Doe' }
  // ]
  //return Response.json(users)
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('number')
  let number: string = query ? query : ''

  const user = await prisma.user.findUnique({
    where: {
      //number: '30305637',
      number: number,
    },
  })

  return Response.json(user)
}

// POSTリクエストの処理
export async function POST(request: NextRequest) {
  const data = await request.json()
  const newUser: User = {
    id: Date.now(),
    name: data.name
  }

  return NextResponse.json(newUser, { status: 201 })
}
