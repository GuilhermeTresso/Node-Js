import {Request, Response} from 'express';
import { AuthCardService } from '../../services/card/AuthCardService';

 class AuthCardController{
    async handle(req:Request, res:Response)
    {
        const {codigoSeguraca,senha,agencia} = req.body;
        const authCardService = new AuthCardService();  
        
        const auth = await authCardService.execute({ codigoSeguraca, senha, agencia })        

        return res.json(auth);
    }
 } 

 export {AuthCardController}