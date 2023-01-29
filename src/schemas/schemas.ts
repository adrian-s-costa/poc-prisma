import Joi from "joi";

export const ProductSchema = Joi.object({
    id_produto: Joi.number(),
    nome: Joi.string().required(),
    descricao: Joi.string().required(),
    quantidade: Joi.number().required(),
})

export const FuncionarioSchema = Joi.object({
    id_funcinario: Joi.number(),
    nome: Joi.string().required(),
    cargo: Joi.string().required(),
    lojaId: Joi.number().required(),
})

export const LojaSchema = Joi.object({
    id_loja: Joi.number(),
    nome: Joi.string().required(),
    endereco: Joi.string().required(),
})