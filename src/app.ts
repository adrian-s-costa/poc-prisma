import express from "express";
import productRouter from "./routers/productRouter.js";
import storeRouter from "./routers/storeRouter.js";
import funcRouter from "./routers/funcRouter.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const server = express();

server.use(cors());
server.use(express.json());

server.use(productRouter);
server.use(storeRouter);
server.use(funcRouter);

server.listen(process.env.PORT, ()=>{
    console.log("O server está no ar!");
})