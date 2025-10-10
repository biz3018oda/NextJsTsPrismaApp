import { NextRequest, NextResponse } from 'next/server'

type User = {
  id: number
  name: string
}

// GETリクエストの処理
export async function GET(request: NextRequest) {
  const users: User[] = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' }
  ]

  return Response.json(users)
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
