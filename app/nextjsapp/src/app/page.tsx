'use client'
import { useEffect, useState } from 'react'
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme/theme';
import Header from "../components/layouts/Header"
import Main from "../components/layouts/Main"
import Footer from "../components/layouts/Footer"

type User = {
  id: number
  number: string
  familyname: string
  firstname: string
  email: string
  img: string
}

export default function HomePage() {
  const url = "/api/users/";
  const type = "number";
  const number = "30305637"

  // const [users, setUsers] = useState<User[]>([])
  const [user, setUser] = useState<User>({
    id: 0,
    number: '',
    familyname: '',
    firstname: '',
    email: '',
    img: '',
  })

  useEffect(() => {
    fetch(url + '?' + type + '=' + number)
      .then((res) => res.json())
      .then((data) => setUser(data))
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Header familyname={user.familyname} firstname={user.firstname} img={user.img} />
      <Main />
      <Footer />
    </ThemeProvider>
  )
}
