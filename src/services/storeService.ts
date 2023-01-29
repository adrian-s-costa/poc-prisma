import { allStores, insertStore, deleteStore, updateStore, allStoresQuery } from "../repositories/storeRepository.js";
import { QueryResult } from "pg";
import { Store, StoreEntity, StoreToUpdate } from "../protocols/store";

export async function storeService(): Promise<QueryResult<StoreEntity>>{
    const products = await allStores();
    return products;
}

export async function storeServiceQuery(): Promise<QueryResult<StoreEntity>>{
    const products = await allStoresQuery();
    return products;
}

export async function insertNewStores(newStore: Store): Promise<QueryResult<StoreEntity>>{
    try{
        const productInserted = await insertStore(newStore);
        return productInserted;
    }catch{
        throw Error;
    }
}

export async function deleteUniqueStore(id: number): Promise<QueryResult<StoreEntity>>{
    try{
        const productDeleted = await deleteStore(id);
        if(productDeleted){
            return {
                message: `Loja deletada com sucesso, linha deletada: ${productDeleted}`
            }
        }
        return {
            message: "Nenhuma loja foi encontrada com esse ID"
        };
    }catch{
        throw Error;
    }
}

export async function updateUniqueStore(body: StoreToUpdate, id: number): Promise<QueryResult<StoreEntity>>{
    try{
        const productUpdated = await updateStore(body, id);
        if(productUpdated){
            return {
                message: `Loja atualizada com sucesso, linha atualizada: ${productUpdated}`
            }
        }
        return {
            message: "Nenhuma loja foi encontrado com esse ID"
        };    
    }catch{
        throw Error;
    }
}