import { PrismaClient } from '../../src/generated/prisma'
import seedUsers from './2025_10_11_0430_users'


const prisma = new PrismaClient()

async function main() {
  await seedUsers()
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
