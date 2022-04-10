import Router from "express";

import {postController} from "../controllers/postController";

//!Guards
import PostGuard from "../guards/PostGuard"
class AuthRoutes{
    public router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/',postController.index)
        this.router.get('/:id',postController.find,PostGuard.show,postController.show)
        this.router.put('/:id',postController.find,postController.update)
        this.router.delete('/:id',postController.find,postController.delete)
    }
}
const authRoutes = new AuthRoutes();
export default authRoutes.router;