"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function default_1(req, res, next) {
    //Va a obtener el header que es lo q voy a recibir de la cabecera. 
    //En el header de authorization (autorización) voy a recibir el token. 
    const tokenHeader = req.headers.authorization;
    //va validar que ese token llegue:
    if (!tokenHeader) {
        return res.status(401).json({ message: 'Token is mandatory' });
    }
    //en caso contrario(que si llegue) voy a hacer la verificación con jwt.verify
    jsonwebtoken_1.default.verify(tokenHeader, 'my-secret', (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid Token' });
        }
        //agregando el sgt comentario voy a conseguir meter vbles adicionales q no existen en la interfase del request
        // @ts-ignore
        req.userId = decoded.id;
        return next();
    });
}
exports.default = default_1;
