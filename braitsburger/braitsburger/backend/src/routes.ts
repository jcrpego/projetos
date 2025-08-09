import {Router, Request, Response} from "express";
import multer from 'multer';
import { CreateUserController } from "./Controllers/CreateUserController";





const router = Router();

// ROTAS PARA USER//
router.post('/user', new CreateUserController().handle)

import uploadConfig from './config/multer';  // importando as configuraçoes de upload
import { CreateProductController } from "./Services/CreateProductController";

const router = Router();

const upload = multer(uploadConfig.upload('./tmp')); // definindo a pasta de upload

export{router}







//---------ROTAS PARA PRODUCT----------//

router.post('/product', isAuthenticated,upload.single('file')new CreateProductController().handle)