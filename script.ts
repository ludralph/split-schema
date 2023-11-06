import { PrismaClient } from './src/generated/utils'


const prisma = new PrismaClient()

// A `main` function so that we can use async/await
async function main() {
  await prisma.ab_email_domain.aggregate
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
