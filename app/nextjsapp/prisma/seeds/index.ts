import { PrismaClient } from '../../src/generated/prisma'
import seedUsers from './2025_10_15_1936_users'
import seedOwners from './2025_10_15_1936_owners'


const prisma = new PrismaClient()

async function main() {
  await prisma.user.deleteMany({})
  await prisma.owner.deleteMany({})

  await seedUsers()
  await seedOwners()
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
