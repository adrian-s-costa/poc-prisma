-- CreateTable
CREATE TABLE "produtos" (
    "id_produto" SERIAL NOT NULL,
    "nome" VARCHAR NOT NULL,
    "descricao" VARCHAR NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "lojaid" INTEGER NOT NULL,

    CONSTRAINT "produtos_pkey" PRIMARY KEY ("id_produto")
);

-- CreateTable
CREATE TABLE "funcionario" (
    "id_funcionario" SERIAL NOT NULL,
    "nome" VARCHAR NOT NULL,
    "cargo" VARCHAR NOT NULL,
    "lojaid" INTEGER NOT NULL,

    CONSTRAINT "funcionario_pkey" PRIMARY KEY ("id_funcionario")
);

-- CreateTable
CREATE TABLE "lojas" (
    "id_loja" SERIAL NOT NULL,
    "nome" VARCHAR NOT NULL,
    "endereco" VARCHAR NOT NULL,

    CONSTRAINT "lojas_pkey" PRIMARY KEY ("id_loja")
);

-- AddForeignKey
ALTER TABLE "produtos" ADD CONSTRAINT "fk_loja" FOREIGN KEY ("lojaid") REFERENCES "lojas"("id_loja") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "funcionario" ADD CONSTRAINT "fk_loja" FOREIGN KEY ("lojaid") REFERENCES "lojas"("id_loja") ON DELETE NO ACTION ON UPDATE NO ACTION;
