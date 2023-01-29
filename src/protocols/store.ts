export type StoreEntity = {
    id_loja: number,
    nome: string,
    endereco: string
}

export type Store = Omit<StoreEntity, "id_loja">

export type StoreToUpdate = Partial<StoreEntity>