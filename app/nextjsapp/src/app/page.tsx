'use client'
import { useEffect, useState } from 'react'
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme/theme';
import Header from "../components/layouts/Header"
import Main from "../components/layouts/Main"
import Footer from "../components/layouts/Footer"

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
    <ThemeProvider theme={theme}>
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  )
}
