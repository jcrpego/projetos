import {Request, Response};
import  {CreateProductService}

class CreateProductController{

    async handle (req:Request, res: Response)

    const (nome, dexcricao, preco, id_categoria) = req.body;

    cont CreateProductService = new CreateProductService();

    if(!this.req.file)// config do multer (upload)

    {
        throw new Error ("Erro no upload da imagem");

    }

    else {

        const {originalname, filename:banner} = req.file;

        const product = await CreateProductService.execute({
            nome,
            descricao,
            preco,
            banner,
            id_categoria
        })
        return resizeBy.json(product);
    }

}

export{CreateProductController}
