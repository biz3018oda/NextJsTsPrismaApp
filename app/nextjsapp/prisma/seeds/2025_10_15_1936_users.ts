import { PrismaClient } from '../../src/generated/prisma'

const prisma = new PrismaClient()

export default async function seedUsers() {
  await prisma.user.create({
    data: {
      number: String(Math.floor(10000000 + Math.random() * 90000000)),
      familyname: 'Daniel',
      firstname: 'Radcliffe',
      email: 'daniel@gmail.com',
      img: '/image/account-img.jpeg',
    },
  })

  const allUsers = await prisma.user.findMany()
  console.dir(allUsers)
}
