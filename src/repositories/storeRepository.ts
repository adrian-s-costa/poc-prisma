import prisma from "../database/pg.js";
import { QueryResult } from "pg";
import { StoreToUpdate, StoreEntity, Store } from "../protocols/store.js";

export async function allStores(): Promise<QueryResult<StoreEntity>> {
    //const products = await connection.query("SELECT * FROM produtos;");
    return await prisma.lojas.findMany();
}

export async function allStoresQuery(): Promise<QueryResult<StoreEntity>> {
    //const products = await connection.query("SELECT * FROM produtos ORDER BY quantidade DESC;");
    // return products.rows;
}

export async function insertStore(newStore: Store): Promise<QueryResult<StoreEntity>> {
    try{
        return await prisma.lojas.create({
            data: newStore
        });
        //return await connection.query("INSERT INTO produtos (nome, descricao, quantidade) VALUES ($1, $2, $3);", [newProduct.nome, newProduct.descricao, newProduct.quantidade]);
    }catch{
        throw Error;
    }
}

export async function deleteStore(id: number): Promise<QueryResult<StoreEntity>> {
    try{
        //return await connection.query("DELETE FROM produtos WHERE id = $1;", [id]);
        return await prisma.lojas.delete({
            where:{
                id_loja: id
            }
        })
    }catch{
        throw Error;
    }
}

export async function updateStore(body: StoreToUpdate, id: number): Promise<QueryResult<StoreEntity>> {
    try{
        return await prisma.lojas.update({
            where: {
                id_loja: id
            },
            data: body
        });
        //return await connection.query("UPDATE produtos SET nome = $1, descricao = $2, quantidade = $3 WHERE id = $4" , [body.nome, body.descricao, body.quantidade, id]);
    }catch{
        throw Error;
    }
}