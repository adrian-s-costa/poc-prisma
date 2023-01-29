import { allFuncs, insertFuncionario, deleteFunc, updateFunc, allFuncsQuery } from "../repositories/funcionarioRepository.js";
import { QueryResult } from "pg";
import { FuncToUpdate, FuncEntity, Func } from "../protocols/funcionario";
import { funcionarios } from "@prisma/client"

export async function funcionarioService(): Promise<QueryResult<FuncEntity>>{
    const products = await allFuncs();
    return products;
}

export async function funcionarioServiceQuery(): Promise<QueryResult<FuncEntity>>{
    const products = await allFuncsQuery();
    return products;
}

export async function insertNewFuncionario(newFunc: funcionarios): Promise<QueryResult<FuncEntity>>{
    try{
        const productInserted = await insertFuncionario(newFunc);
        return productInserted;
    }catch{
        throw Error;
    }
}

export async function deleteUniqueFuncionario(id: number): Promise<QueryResult<FuncEntity>>{
    try{
        const productDeleted = await deleteFunc(id);
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

export async function updateUniqueFuncionario(body: FuncToUpdate, id: number): Promise<QueryResult<FuncEntity>>{
    try{
        const productUpdated = await updateFunc(body, id);
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