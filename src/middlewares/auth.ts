import jwt from "jsonwebtoken";
import authConfig from "../../config/auth"
export default (req:any,res:any,next:any):any =>{
    console.log(req.headers)

    //?Comprobar si existe el token
    if(!req.headers.authorization){
        res.status(401).json({ msg:"Acceso no autorizado"})
    }else{
        //*Comprobar la validez del token
        let token = req.headers.authorization.split(" ")[1];

        jwt.verify(token,authConfig.secret,(err:any, decoded:any) =>{

            if(err){
                res.status(500).json({msg: "Ha ocurrido un problema al decodificar el token", err })
            }else{

               //*El decoded es el usuario del token (devuelve el objeto del usuario)
               console.log(decoded)
               next();  
            }

        })


       
    }
}