import { Request, Response } from "express";
import { prodService, insertNewProducts, deleteUniqueProduct, updateUniqueProduct, prodServiceQuery} from "../services/productService.js";
import { ProductEntity } from "../protocols/product.js";
import { QueryResult } from "pg";
import { Product } from "../protocols/product.js";

export async function getProducts(req: Request, res: Response): Promise<QueryResult<ProductEntity>>{
    if(req.query.price == "true"){
        const products = await prodServiceQuery();
        return res.send(products).status(200);
    }
    const products = await prodService();
    return res.send(products).status(200);
}

export async function postProduct(req: Request, res: Response): Promise<QueryResult<ProductEntity>>{
    try{
        const newProduct = req.body as Product;
        const result = await insertNewProducts(newProduct);
        res.send(`Product inserted: ${result.rowCount}`).status(200);
    }catch{
        res.sendStatus(400);
    }
}

export async function deleteProduct(req: Request, res: Response): Promise<QueryResult<ProductEntity>>{
    try{
        const idProduct = parseInt(req.params.productId);
        const result = await deleteUniqueProduct(idProduct);
        return res.status(result.message == "Nenhum produto foi encontrado com esse ID" ? 404 : 200).send(result.message);
    }catch{
        return res.sendStatus(404);
    }
}

export async function updateProduct(req: Request, res: Response): Promise<QueryResult<ProductEntity>>{
    try{
        const idProduct = parseInt(req.params.productId);
        const prodToUpdate = req.body
        const result = await updateUniqueProduct(prodToUpdate, idProduct);
        return res.status(result.message == "Nenhum produto foi encontrado com esse ID" ? 404 : 200).send(result.message);
    }catch{
        return res.sendStatus(404);
    }
}

