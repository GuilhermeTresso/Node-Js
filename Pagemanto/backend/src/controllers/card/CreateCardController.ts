import { Request,response,Response } from "express";
import { CreateCardService } from "../../services/card/CreateCardService";

class CreateCardController{
    async handle(req: Request, res: Response){
        const {senha, agencia, codigoSeguraca, valorLimite, valorAtual} = req.body;
        const createCardService = new CreateCardService();
        const card = await createCardService.execute({senha, agencia, codigoSeguraca, valorLimite, valorAtual});

        return res.json(card)
    }
}

export{CreateCardController}