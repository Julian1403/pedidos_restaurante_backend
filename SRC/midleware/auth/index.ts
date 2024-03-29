//el midleware este lo q hace es interceptar la petición en el momento q llega y antes de enviarla al controlador 
import { Request,Response,NextFunction } from "express";
import jwt from "jsonwebtoken";
declare global {
    namespace Express {
        interface Request {
            userId?: string;
        }
    }
}

export default function (req: Request, res: Response, next: NextFunction){

      /*
    HEADERS: Contiene todos los encabezados HTTP que fueron enviados en la peticion
    se pueden extraer datos como tokens de autenticación, user-agents (postman).
    se accede usando req.headers;
    */

    /*
    BODY: Contiene el cuerpo de la solicitud
    se accede usando req.body;
    */

    /*
    PARAMS: Contiene los parametros de la ruta, los parametros de la ruta son segmentos 
    de la misma URL, utilizados para capturar valores especificos
    ej: /api/user/:userID -> userID seria el parametro que esta dentro de la URL
    se accede usando req.params;
    */
    

    /*
    QUERY: Contiene los parametros de consulta de la URL, se conoce como parametro de consulta cuando usa
    el simbolo ? despues de la url
    EJ: /api/user?id=123
    EJ: /api/user?id=123&name=daniel
    EJ: /api/user?_sort=ASC
    se accede usando req.query;
    */

   /*
    METHOD: Representa el metodo HTTP de la solicitud se le conoce tamien como verbo http
    (GET, POST, PUT, DELETE, PATCH) 
    se accede usando req.method;
    */

    /*
    PATH: Representa la ruta de la URL en la que se realizo la solicitud
    Ej: /api/users
    se accede usando req.path;
    */

    
    //Va a obtener el header que es lo q voy a recibir de la cabecera. 
    //En el header de authorization (autorización) voy a recibir el token. 
    const tokenHeader = req.headers.authorization;
    //va validar que ese token llegue:
    if(!tokenHeader){
        return res.status(401).json({message: 'Token is mandatory'});
    }
    //en caso contrario(que si llegue) voy a hacer la verificación con jwt.verify
    jwt.verify(tokenHeader, 'my-secret', (err, decoded)=>{
        if(err){
            return res.status(401).json({message: 'Invalid Token'})
        }
        //agregando el sgt comentario voy a conseguir meter vbles adicionales q no existen en la interfase del request
        
        // @ts-ignore
        req.userId = decoded.id;

        return next();


    })
}