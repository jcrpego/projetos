import express, {Request, Response, NextFunction, Router} from 'express';
import 'express-async-errors';
import {router} from './routes'; //importa o objeto router
import cors from 'cors';

const app = express(); //ojeto que executa as fuções de beckend(servidor)

app.use(express.json()); //define que a resposta ao cliente será no formato JSON
app.use(router); //define qual objeto executará as rotas no arquivo routes.ts

//middleware para tratamento de erros nas rotas
app.use((err:Error, req: Request, res: Response, next: NextFunction)=>{
    if(err instanceof Error){
        //se o valor recebido for uma instância do tipo erro
        return res.status(400).json({
            error: err.message
        })
    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal Server Error.'
    })
})

app.use(cors()); // habilita o acesso externo por meio HTTP


app.listen(3333, ()=> console.log("Server ON"));