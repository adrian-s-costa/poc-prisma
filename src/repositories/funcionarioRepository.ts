import prisma from "../database/pg.js";
import { QueryResult } from "pg";
import { FuncToUpdate, FuncEntity, Func } from "../protocols/funcionario";
import { funcionarios } from "@prisma/client"

export async function allFuncs(): Promise<QueryResult<FuncEntity>> {
    //const products = await connection.query("SELECT * FROM produtos;");
    return await prisma.funcionarios.findMany();
}

export async function allFuncsQuery(): Promise<QueryResult<FuncEntity>> {
    //const products = await connection.query("SELECT * FROM produtos ORDER BY quantidade DESC;");
    // return products.rows;
}

export async function insertFuncionario(newFunc: funcionarios): Promise<QueryResult<FuncEntity>> {
    try{
        return await prisma.funcionarios.create({
            data: newFunc
        });
        //return await connection.query("INSERT INTO produtos (nome, descricao, quantidade) VALUES ($1, $2, $3);", [newProduct.nome, newProduct.descricao, newProduct.quantidade]);
    }catch{
        throw Error;
    }
}

export async function deleteFunc(id: number): Promise<QueryResult<FuncEntity>> {
    try{
        //return await connection.query("DELETE FROM produtos WHERE id = $1;", [id]);
        return await prisma.funcionarios.delete({
            where:{
                id_funcionario: id
            }
        })
    }catch{
        throw Error;
    }
}

export async function updateFunc(body: FuncToUpdate, id: number): Promise<QueryResult<FuncEntity>> {
    try{
        return await prisma.funcionarios.update({
            where: {
                id_funcionario: id
            },
            data: body
        });
        //return await connection.query("UPDATE produtos SET nome = $1, descricao = $2, quantidade = $3 WHERE id = $4" , [body.nome, body.descricao, body.quantidade, id]);
    }catch{
        throw Error;
    }
}