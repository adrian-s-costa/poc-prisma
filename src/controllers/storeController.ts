import { Request, Response } from "express";
import { storeService, insertNewStores, deleteUniqueStore, updateUniqueStore, storeServiceQuery} from "../services/storeService.js";
import { StoreEntity, Store } from "../protocols/store";
import { QueryResult } from "pg";

export async function getStores(req: Request, res: Response): Promise<QueryResult<StoreEntity>>{
    if(req.query.price == "true"){
        const stores = await storeServiceQuery();
        return res.send(stores).status(200);
    }
    const stores = await storeService();
    return res.send(stores).status(200);
}

export async function postStore(req: Request, res: Response): Promise<QueryResult<StoreEntity>>{
    try{
        const newStore = req.body as Store;
        const result = await insertNewStores(newStore);
        res.send(`Product inserted: ${result}`).status(200);
    }catch{
        res.sendStatus(400);
    }
}

export async function deleteStore(req: Request, res: Response): Promise<QueryResult<StoreEntity>>{
    try{
        const idStore = parseInt(req.params.storeId);
        const result = await deleteUniqueStore(idStore);
        return res.status(result.message == "Nenhuma loja foi encontrado com esse ID" ? 404 : 200).send(result.message);
    }catch{
        return res.sendStatus(404);
    }
}

export async function updateStore(req: Request, res: Response): Promise<QueryResult<StoreEntity>>{
    try{
        const idStore = parseInt(req.params.storeId);
        const storeToUpdate = req.body
        const result = await updateUniqueStore(storeToUpdate, idStore);
        return res.status(result.message == "Nenhuma loja foi encontrado com esse ID" ? 404 : 200).send(result.message);
    }catch{
        return res.sendStatus(404);
    }
}