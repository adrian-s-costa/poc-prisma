## API Gerenciamento de estoque [![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

API CRUD básica feita para controle de estoque de produtos

## Features

- Adicione qualquer tipo de produto, descrição e quantidade
- Podendo os filtrar pela quantidade dos produtos
- Um CRUD básico mas eficaz

## Tecnologias

API Gerenciamento de estoque utiliza as tecnologias:

- TypeScript - Linguagem
- Node.js - Ambeinte de execução
- Express.js - Framework
- Joi - Library para validação
- Postgres - Banco de dados 

## Rotas - Products

### GET /products
```
[
  {
    "id": 1
    "nome": "TV Samsung 50 polegadas",
    "descricao": "Uma TV bem grande",
    "quantidade": 20,
    "lojaid": 1
  }
]
```

### POST /products
body:
```
{
  "nome": "TV Samsung 50 polegadas",
  "descricao": "Uma TV bem grande",
  "quantidade": 20,
  "lojaid": 1
}
```

### POST /products/:productId
body (somente preencher os atributos que deseja atualizar):
```
{
  "nome": "TV Samsung 50 polegadas",
  "descricao": "Uma TV bem grande",
  "quantidade": 20,
  "lojaid": 1
}
```

### DELETE /products/:productId
sem body, somente id da loja que deseja excluir

## Rotas - /lojas

### GET /lojas
```
[
  {
    "id": 1
    "nome": "Romera",
    "endereco":"Rua 13 de Junho
  }
]
```
### POST /lojas
body:
```
{
  "nome": "Romera",
  "endereco":"Rua 13 de Junho
}
```
### POST /lojas/:lojaId
body (somente preencher os atributos que deseja atualizar):
```
{
  "nome": "Romera",
  "endereco":"Rua 13 de Junho
}
```
### DELETE /lojas/:lojaId
sem body, somente id da loja que deseja excluir

## Rotas - /funcionarios

### GET /funcionarios
response:
```
[
  {
    "id": 1
    "nome": "Denis",
    "cargo": "Gerente",
    "lojaid": 1
  }
]
```
### POST /funcionarios
body:
```
{
   "nome": "Denis",
   "cargo": "Gerente",
   "lojaid": 1
}
```
### POST /funcionarios/:funcionarioId
body (somente preencher os atributos que deseja atualizar):
```
{
   "nome": "Denis",
   "cargo": "Gerente",
   "lojaid": 1
}
```
### DELETE /funcionarios/:funcionarioId
sem body, somente id do funcionário que deseja excluir
