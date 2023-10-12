import express from 'express';
const router=express.Router();
//importar el midleware pa proteger la ruta:
import authmidleware from '../../midleware/auth'
//importar el controlador 
import {createMethod, updateMethod, getMethod,getByIdMethod,deleteMethod } from '../../controllers/tables'

// hasta aquí la peticion es: /api/tables
router.post("/", [authmidleware, createMethod]); // post se usa para crear
router.put("/:id", [authmidleware, updateMethod]); // put se usa para actualizar 
router.get("/", [authmidleware, getMethod]);//get se usa para obtener
//router.get("/:idUsuario", getByIdMethod); // get se usa para obtener(en este caso con id)
router.get("/:id", getByIdMethod);//mira que como llamo al id aca, lo debo llamar en mi archivo de controllers.
router.delete("/:id", deleteMethod); //delete se usa para borrar


export default router