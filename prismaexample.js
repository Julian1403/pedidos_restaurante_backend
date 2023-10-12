import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
try {
        // ... you will write your Prisma Client queries here
        //conectarnos con la base de datos:
        await prisma.$connect()
        console.log("se ha conectado exitosament")
        //crear un usuario en la base de datos:
        const createdUser=await prisma.user.create({
            data:{
              name:"gutyven",
              lastName:"primo",
              email: "haroesteves@gmail.com"
                }
            })
            console.log("mostrando usuario creado",createdUser)
        
          //listar usuarios de la base de datos: ya los devuelve como un array
          const allUsers = await prisma.user.findMany()
          console.log("mostrando TODOS los usuarios creados ", allUsers)
      }
catch (error) {
    throw new Error(JSON.stringify(error));
}
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