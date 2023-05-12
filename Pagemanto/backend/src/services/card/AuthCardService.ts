import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from 'jsonwebtoken';

interface AuthResquest{
    codigoSeguraca: string;
    agencia: string;
    senha: string;
}

class AuthCardService{
    async execute({ codigoSeguraca,agencia,senha}: AuthResquest)
    {        
        const Card = await prismaClient.cartao.findFirst({
            where:
            {
                agencia: agencia,
                senha: senha
            }
        })


        
        if(!Card)        
        {
            throw new Error("Usuário ou senha incorretos!");
        }    
        
        const codigoSeguracaMatch = await compare(codigoSeguraca, Card.codigoSeguraca)
        console.log(codigoSeguracaMatch)

        if(!codigoSeguracaMatch)
        {
            throw new Error("Usuário ou senha incorretos!")
        }
        const token = sign(
            {
                agencia: Card.agencia,
                senha: Card.senha,
                codigoSeguraca: Card.codigoSeguraca
            },
            process.env.JWT_SECRET,
            {
                subject: Card.id,
                expiresIn: '30d'
            }
        )
        
        return{
            id: Card.id,
            agencia: Card.agencia,
            senha: Card.senha,
            token: token
        }

    }
}

export {AuthCardService}
