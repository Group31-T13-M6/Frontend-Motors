import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IContext, IProvider } from "src/interfaces/contextApi";

import api from "src/services/api";
import { IUserLogin, IUserRegister } from "src/interfaces/user";
import { AxiosError } from "axios";
import { HomeContext } from "./HomeContext";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IProvider) => {
  const navigate = useNavigate();

  const postLogin = async (data: IUserLogin) => {
    console.log('Executou login')

    try {
      const response = await api.post("/login", data);
      const token = response.data.token;
      localStorage.setItem("@UserToken", token);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const postRegister = async (data: IUserRegister) => {
    try {
      const response = await api.post("/users", data);
      navigate("/dashboardUsuario");
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data.message);
      }
    }
  };

  return (
    <AuthContext.Provider value={{ postLogin, postRegister }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useContextApi = () => {
  const context = useContext(AuthContext);
  return context;
};
