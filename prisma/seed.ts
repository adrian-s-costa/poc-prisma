import prisma from "../src/database/pg.js";

async function seed(){
    await prisma.lojas.createMany({
        data:[
            {
                "nome": "Romera",
                "endereco":"Rua 13 de Junho"
            },
            {
                "nome": "Casas Bahia",
                "endereco":"Rua 15 de Novembro"
            },
            {
                "nome": "Magazine",
                "endereco":"Rua Delamare"
            }
        ]
    })

    await prisma.funcionarios.createMany({
        data:[
            {
                "nome": "Denis",
                "cargo": "Gerente",
                "lojaid": 1
            },
            {
                "nome": "Giorgina",
                "cargo": "Vendedora",
                "lojaid": 3
            },
            {
                "nome": "Hermes",
                "cargo": "Entregador",
                "lojaid": 2
            },
        ]
    })

    await prisma.produtos.createMany({
        data:[
            {
                "nome": "TV Samsung 50 polegadas",
                "descricao": "Uma TV bem grande",
                "quantidade": 20,
                "lojaid": 1
            },
            {
                "nome": "Liquidificador Phillips",
                "descricao": "Corta e tritura!",
                "quantidade": 50,
                "lojaid": 2
            },
            {
                "nome": "Cadeira de escritório",
                "descricao": "Muita caneta",
                "quantidade": 15,
                "lojaid": 3
            },
        ]
    })
}

seed()
    .then(()=>{
        console.log("Seed aplicada no banco!");
    })
    .catch(e => {
        console.log(e);
        process.exit(1);
    })
    .finally( async ()=>{
        await prisma.$disconnect();
    })