"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signIn = exports.signUp = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
//ahora sigue importar bcrypt y jwt para lo de la autenticación y las claves
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
//ahora sigue crearse los métodos: 
//const signUp = async (req: Request, res: Response): Promise <void> => {
//quita la promesa pa evitar un problema con las cabeceras ya que devuelve varios return
//lo mismo con el signin 
const signUp = async (req, res) => {
    try {
        const findUser = await prisma.user.findUnique({
            where: { email: req.body.email }
        });
        //si el email no es único entonces se puede registrar:
        if (!findUser) {
            //hashed pasword es una cte q permite almacenar la contraseña encriptada(10 veces la encripta)
            const hashedPassword = await bcrypt_1.default.hash(req.body.password, 10);
            const newUser = await prisma.user.create({
                data: {
                    name: req.body.name,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: hashedPassword //pasa la contraseña cifrada
                }
            });
            return res.status(200).json({ data: newUser });
        }
        else {
            return res.status(400).json({ message: "User already exists" });
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
};
exports.signUp = signUp;
const signIn = async (req, res) => {
    const { email, password } = req.body;
    try {
        //validate if user exists
        const findUser = await prisma.user.findUnique({
            where: { email: email }
        });
        if (!findUser) {
            return res.status(400).json({ message: 'User not found' });
        }
        //Validate if password is matched (validar si la clave es correcta)
        const isValidPassword = await bcrypt_1.default.compare(password, findUser.password);
        if (!isValidPassword) {
            return res.status(400).json({ message: 'Email or Password iss Invalid' });
        }
        //acá va firmar el token 
        const token = jsonwebtoken_1.default.sign({ id: findUser.id, name: findUser.name, email: findUser.email }, 'my-secret', { expiresIn: '1h' });
        return res.status(200).json({ token });
    }
    catch (error) {
    }
};
exports.signIn = signIn;
