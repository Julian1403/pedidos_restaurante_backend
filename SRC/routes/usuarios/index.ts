import express from 'express';
const router=express.Router();
//importar el midleware pa proteger la ruta:
import authmidleware from '../../midleware/auth'
//importar el controlador 
import {getAllUsers, getAllUsersById, createNewUsers,updateUsers,deleteUsers } from '../../controllers/usuarios'

// hasta aquí la peticion es: /api/usuarios
router.get("/", [authmidleware, getAllUsers]); // get all users
router.get("/:idUsuario", getAllUsersById); // get user by id
router.post("/", createNewUsers); // create new users
router.put("/:id", updateUsers); // update specific user
router.delete("/:id", deleteUsers); //delete specific user 

export default router