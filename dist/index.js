"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
// import { PrismaClient } from '@prisma/client'
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const routes_1 = __importDefault(require("./routes"));
//Conectarnos con la base de datos
let connString = (_a = process.env.DATABASE_URL) !== null && _a !== void 0 ? _a : ""; //en el caso de que sea nulo o indefinido se pasará las comillas vacias como valor 
mongoose_1.default.connect(connString)
    .then(() => console.log("se ha contectado a la base de datos"))
    .catch(() => console.log("no se pudo contectar a la base de datos"));
//crear una nueva intancia de prisma luego la quita
// const prisma = new PrismaClient()
//crear una nueva isntancia de express
const app = (0, express_1.default)();
//agregar un middleware para manejar los JSON
app.use(express_1.default.json());
//archivo ppal de rutas
//la petición es /api y luego lo manda a router
app.use("/api", routes_1.default);
//pone a escuchar la aplicacion asi:
app.listen(3000, () => {
    console.log("servidor de node iniciado en el puerto 3000");
});
