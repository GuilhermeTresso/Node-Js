import {Request, Response} from 'express'
import { BuyCardService } from '../../services/card/BuyCardService';


class BuyCardController{
    async handle(req: Request, res:Response){

        

        const card_id = req.card_id;

        console.log(card_id)
        const detailUserService = new BuyCardService();
        const card = await detailUserService.execute(card_id);

        if(card !== null)
        {
            return res.json({"Compra autorizada": true});
        }
        else 
        {
            return res.json({"Compra não autorizada": false});
        }
    }
}

export {BuyCardController}