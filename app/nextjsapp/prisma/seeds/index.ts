import { PrismaClient } from '../../src/generated/prisma'
import seedUsers from './2025_10_15_1936_users'
import seedOwners from './2025_10_15_1936_owners'
import seedCollections from './2025_10_16_1412_collections'


const prisma = new PrismaClient()

async function main() {
  await prisma.user.deleteMany({})
  await prisma.owner.deleteMany({})
  await prisma.collection.deleteMany({})

  await seedUsers()
  await seedOwners()
  await seedCollections()
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
