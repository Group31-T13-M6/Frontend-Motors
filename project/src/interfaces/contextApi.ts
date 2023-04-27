import { ReactNode } from "react";
import { IUserLogin, IUserRegister } from "./user";

export interface IProvider {
  children: ReactNode;
}

export interface IContext {
  postLogin(data: IUserLogin): void;
  postRegister(data: IUserRegister): void;
}
