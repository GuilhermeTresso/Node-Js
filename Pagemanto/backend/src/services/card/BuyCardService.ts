import prismaClient from "../../prisma";

class BuyCardService {
    async execute(card_id: string)
    {
        

        const user = await prismaClient.cartao.findFirst({
            where:{
                id:card_id
            },
            select:{
                id:true,
                agencia:true,
                valorAtual:true,
            }
        })        

        return user;
    }
}

export {BuyCardService}