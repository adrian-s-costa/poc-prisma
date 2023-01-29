import { Request, Response } from "express";
import { funcionarioServiceQuery, insertNewFuncionario, deleteUniqueFuncionario, updateUniqueFuncionario, funcionarioService} from "../services/funcionarioService.js";
import { Func, FuncEntity, FuncToUpdate } from "../protocols/funcionario";
import { QueryResult } from "pg";
import { funcionarios } from "@prisma/client";

export async function getFuncionarios(req: Request, res: Response): Promise<QueryResult<FuncEntity>>{
    if(req.query.price == "true"){
        const stores = await funcionarioServiceQuery();
        return res.send(stores).status(200);
    }
    const stores = await funcionarioService();
    return res.send(stores).status(200);
}

export async function postFuncionarios(req: Request, res: Response): Promise<QueryResult<FuncEntity>>{
    try{
        const newStore = req.body as funcionarios;
        const result = await insertNewFuncionario(newStore);
        res.send(`Product inserted: ${result}`).status(200);
    }catch{
        res.sendStatus(400);
    }
}

export async function deleteFuncionario(req: Request, res: Response): Promise<QueryResult<FuncEntity>>{
    try{
        const idStore = parseInt(req.params.storeId);
        const result = await deleteUniqueFuncionario(idStore);
        return res.status(result.message == "Nenhuma loja foi encontrado com esse ID" ? 404 : 200).send(result.message);
    }catch{
        return res.sendStatus(404);
    }
}

export async function updateFuncionario(req: Request, res: Response): Promise<QueryResult<FuncEntity>>{
    try{
        const idStore = parseInt(req.params.storeId);
        const storeToUpdate = req.body
        const result = await updateUniqueFuncionario(storeToUpdate, idStore);
        return res.status(result.message == "Nenhuma loja foi encontrado com esse ID" ? 404 : 200).send(result.message);
    }catch{
        return res.sendStatus(404);
    }
}