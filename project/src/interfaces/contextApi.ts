import { ReactNode } from "react";
import { IUserLogin } from "./login";

export interface IProvider {
  children: ReactNode;
}

export interface IContext {
  postLogin(data: IUserLogin): void;
}
