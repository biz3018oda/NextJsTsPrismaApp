'use client'
import { useEffect, useState } from 'react'

type User = {
  id: number
  name: string
}

export default function HomePage() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }, [])

  return (
    <>
      <main>
        <h1>Users</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </main>
    </>
  )
}
