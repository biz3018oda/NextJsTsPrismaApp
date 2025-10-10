import { PrismaClient } from '../../src/generated/prisma'

const prisma = new PrismaClient()

export default async function seedUsers() {
  const alice = await prisma.user.upsert({
    where: { number: '20305636' },
    update: {},
    create: {
      number: '20305636',
      familyname: '東京',
      firstname: '田中',
      email: 'alice@gmail.com',
      img: '/image/account-img.jpeg',
    },
  })
  const bob = await prisma.user.upsert({
    where: { number: '30305637' },
    update: {},
    create: {
      number: '30305637',
      familyname: 'スペア',
      firstname: 'リブ',
      email: 'bob@gmail.com',
      img: '/image/account-img.jpeg',
    },
  })
  console.log({ alice, bob })
}
