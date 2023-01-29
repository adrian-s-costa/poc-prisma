import { Router } from 'express';
import { getStores, postStore,  deleteStore, updateStore} from '../controllers/storeController.js';
import { validateStore } from '../middlewares/productValidator.js';

const storeRouter = Router();

storeRouter.get("/lojas", getStores);
storeRouter.post("/lojas", validateStore, postStore);
storeRouter.delete("/lojas/:lojaId", deleteStore);
storeRouter.post("/lojas/:lojaId", updateStore);

export default storeRouter;