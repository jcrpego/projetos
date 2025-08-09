import prismaClient from "../prisma"
import {hash} from 'bcryptjs'

Interface UserInterface{
    nome: string;
    email: string;
    senha: string
}

class CreateUserService

   
   
   
   
    async execute({nome, email, senha}:UserInterface)
    
        //verificar se o e-mail foi enviado na requisição
        if(!email)
    {
        
    }


