import { IAddress, IAddressRegister } from "./address";
import { IProduct } from "./products";

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserRegister {
  name: string;
  email: string;
  cpf: string;
  phone_number: string;
  date_birth: string;
  description: string;
  type_user: string;
  password: string;
  address?: IAddressRegister;
  confirmPassword: string;
}

export interface IUser {
  id: string;
  name: string;
  cpf: string;
  email: string;
  phone_number: string;
  date_birth: string;
  description: string;
  type_user: string;
  createdAt: string;
  updatedAt: string;
  address: IAddress;
  announcements: IProduct[];
}

