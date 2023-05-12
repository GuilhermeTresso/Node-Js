import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface CardRequest{
    senha: string;
    agencia: string;
    codigoSeguraca: string;
    valorLimite: string;
    valorAtual: string;
}

class CreateCardService{
    async execute({senha, agencia,codigoSeguraca, valorLimite, valorAtual}: CardRequest){
        //Verifica email esta com valor
        if(!senha){   
            throw new Error("Senha não informada");
        }
        if(!agencia){   
            throw new Error("agencia não foi enviado!");
        }
        if(!codigoSeguraca){   
            throw new Error("codigoSeguraca não foi enviado!");
        }

        const UserAlreadyExists = await prismaClient.cartao.findFirst({
            where:{
                codigoSeguraca: codigoSeguraca
            }
        })

        if(UserAlreadyExists)
        {
            throw new Error("Email já cadastrado!");
        }
        
        
        const codigoSeguracaHash = await hash(codigoSeguraca,8);

        //insert into via prisma              
        const user = await prismaClient.cartao.create({
            data:{
                codigoSeguraca: codigoSeguracaHash,
                agencia: agencia,
                valorLimite: valorLimite,
                senha:senha,
                valorAtual: valorAtual
            },
            select:
            {
                id:true,
                codigoSeguraca:true,
                agencia:true,
                senha:true,
                valorAtual:true,
                valorLimite:true
            }
        })
        

        return user;
    }
}


export {CreateCardService}