import { PrismaClient } from '../../src/generated/prisma'
import seedUsers from './2025_10_15_1936_users'
import seedCollections from './2025_10_16_1412_collections'
import seedNewItems from './2025_10_18_0819_newItems'
import seedNews from './2025_10_18_0311_news'
import seedOwners from './2025_10_15_1936_owners'


const prisma = new PrismaClient()

async function main() {
  await prisma.user.deleteMany({})
  await prisma.collection.deleteMany({})
  await prisma.newItem.deleteMany({})
  await prisma.news.deleteMany({})
  await prisma.owner.deleteMany({})

  await seedUsers()
  await seedCollections()
  await seedNewItems()
  await seedNews()
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
