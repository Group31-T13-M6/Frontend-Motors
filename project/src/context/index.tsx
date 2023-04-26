import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IContext, IProvider } from "src/interfaces/contextApi";
import { IUserLogin } from "src/interfaces/login";
import api from "src/services/api";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IProvider) => {
  const navigate = useNavigate();

  const postLogin = async (data: IUserLogin) => {
    console.log(data);
    try {
      const response = await api.post("/login", data);
      navigate("/");
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ postLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useContextApi = () => {
  const context = useContext(AuthContext);
  return context;
};
