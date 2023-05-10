export interface IAddressRegister {
    cep: string;
    state: string;
    city: string;
    street: string;
    number: string;
    complement: string;
    userId: string;
}

export interface IAddressUpdate {
    cep?: string;
    state?: string;
    city?: string;
    street?: string;
    number?: string;
    complement?: string;
}

export interface IAddress {
    id: string;
    cep: string;
    state: string;
    city: string;
    street: string;
    number: string;
    complement: string;
}