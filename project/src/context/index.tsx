import { AxiosError } from "axios";
import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IContext, IProvider } from "src/interfaces/contextApi";
import { IUserLogin } from "src/interfaces/login";
import { toastError } from "src/styles/components/Toastify";
import api from "src/services/api";

type ILogin = "Buyer" | "Advertiser";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IProvider) => {
  const navigate = useNavigate();

  const postLogin = async (data: IUserLogin) => {
    try {
      const response = await api.post("/login", data);
      const typeUser: ILogin = response.data.typeUser;

      if (typeUser == "Buyer") {
        return navigate("/dashboard/comprador");
      }

      return navigate("/dashboard/vendedor");
    } catch (err) {
      if (err instanceof AxiosError) {
        const message = err.response?.data?.message;
        toastError(message);
      }
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
