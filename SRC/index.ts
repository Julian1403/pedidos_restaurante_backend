// import { PrismaClient } from '@prisma/client'
import express from 'express';
import mongoose from 'mongoose';
import router from './routes';
import cors from 'cors'

//Conectarnos con la base de datos
let connString: string = process.env.DATABASE_URL ?? "";//en el caso de que sea nulo o indefinido se pasará las comillas vacias como valor 
mongoose.connect(connString)
.then(()=>console.log("se ha contectado a la base de datos"))
.catch(()=> console.log("no se pudo contectar a la base de datos"))

//crear una nueva intancia de prisma luego la quita
// const prisma = new PrismaClient()

//crear una nueva isntancia de express
const app = express();

//agregar un middleware para manejar los JSON
app.use(express.json());

app.use(cors({origin:'*', credentials:false}))

//archivo ppal de rutas
//la petición es /api y luego lo manda a router
app.use("/api",router)

//pone a escuchar la aplicacion asi:
 app.listen(4000, ()=> {
     console.log("servidor de node iniciado en el puerto 4000");
 })