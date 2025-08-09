// importação do pacote express
import { Request, Response } from "express";
import { CreateUserService } from "../Services/CreateUserService";


class CreateUserController{

    async handle(req:Request, res:Response) {

         // descosntruindo o JSON recebido na requisição
        const {nome, email, idade} = req.body;

        // criando um objeto da classe CreateUserService
        const createUserService = new CreateUserService();

        // executa o método execute() da classe CreateUserService (serviço)
        const user = await createUserService. execute();


        // retorna o resultado do service (sempre usar o res, o objeto do tipo Response)
        return res.json(user);
    }


}




// deixa a classe CreateUserController pública 
export{CreateUserController} 