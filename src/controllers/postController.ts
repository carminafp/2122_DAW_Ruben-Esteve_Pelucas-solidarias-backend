import { Request, Response} from 'express';
//? Lo importo de esta manera para que funcionen y ver las ayudas me he descargado los @types
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

//? Importo el modelo user
const {user} = require('../database/models/user'); //! Mirar si le puedo poner un type al ORM

//? Configuración para el auth
import authConfig from '../../config/auth'

//? Importo la interfazes creadas por mi
import { Error } from '../interfaces/error';
import { UserI } from '../interfaces/User';
const {Post} = require('../database/models/index');
//Todo Tipos de status a usar
    //? 200 OK 201 Se ha creado
    //? 404 No se encontro 401 No tienes acceso
    //? 500 Error del servidor
class PostController{

    //? Find este es un método que actuará como middleware y será reusado
    async find(req:any,res:Response,next:any){
        let post = await Post.findByPk(req.params.id)
        if(!post){
            res.status(404).json({msg:"No se ha encontrado ningun post"})
        }else{
            req.post = post;
            next();
        }
    }
    //? Index
    async index(req:Request,res:Response){
        await Post.findAll()
        .then((posts:any)=>{
            if(posts){
               res.status(200).json(posts) 
            }else{
                res.status(404).json({msg:"No se ha encontrado ningun post"})
            }
        })
        .catch((error:Error) =>{
            res.status(500).json(error)
        })
      
    }

    //Show
    async show(req:Request|any, res:Response){
        try{
           res.json(req.post)
        }catch(error:any){
            res.status(500).json(error)
        }
       
    }
    //Update
    async update(req:Request|any,res:Response){
        try{
            req.post.title = req.body.title;
            req.post.body = req.body.body;
            req.post.save().then((post:any) => {
                res.status(200).json(post)
            })
        }catch(error){
            res.status(500).json(error)
        }
    }
    //Delete
    async delete(req:Request|any,res:Response){
       try{
            req.post.destroy().then((post:any)=>{
                res.status(200).json({post,msg:"El post ha sido eliminado"})
            })
        }catch(error){
            res.status(500).json(error)
        }
    }
    
}
export const postController = new PostController();