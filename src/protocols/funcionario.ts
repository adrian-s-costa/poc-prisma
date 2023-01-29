export type FuncEntity = {
    id_funcionario: number,
    nome: string,
    cargo: string,
    lojaId: number,
}

export type Func = Omit<FuncEntity, "id_funcionario" | "lojas">

export type FuncToUpdate = Partial<FuncEntity>