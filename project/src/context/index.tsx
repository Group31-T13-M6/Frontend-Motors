import { createContext } from "react";
import { IContext, IProvider } from "src/interfaces/contextApi";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IProvider) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
