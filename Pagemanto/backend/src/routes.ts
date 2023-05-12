import { Router} from  "express";
import { AuthCardController } from "./controllers/card/AuthCardController";
import { BuyCardController } from "./controllers/card/BuyCardController";
import { CreateCardController } from "./controllers/card/CreateCardController";
import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router(); //crio uma instância do elemento Router

//-----ROTAS PARA USER-----//
router.post("/Card", new CreateCardController().handle)
router.post("/Session", new AuthCardController().handle)

router.get("/ComprarCartao", isAuthenticated, new BuyCardController().handle)
//exportação do objeto router para acesso de outros arquivos
export {router}; 