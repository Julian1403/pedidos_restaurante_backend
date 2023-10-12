"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
//importar el midleware pa proteger la ruta:
const auth_1 = __importDefault(require("../../midleware/auth"));
//importar el controlador 
const usuarios_1 = require("../../controllers/usuarios");
// hasta aquí la peticion es: /api/usuarios
router.get("/", [auth_1.default, usuarios_1.getAllUsers]); // get all users
router.get("/:idUsuario", usuarios_1.getAllUsersById); // get user by id
router.post("/", usuarios_1.createNewUsers); // create new users
router.put("/:id", usuarios_1.updateUsers); // update specific user
router.delete("/:id", usuarios_1.deleteUsers); //delete specific user 
exports.default = router;
