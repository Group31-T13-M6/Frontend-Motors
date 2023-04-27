import { createContext, useState, useEffect } from "react";
import api from "../services/api";

export interface iDefaultContextProps {
  children: React.ReactNode;
}

export interface IProductImages {
  id: string;
  url: string;
  position: number;
}

export interface iProduct {
  id: string;
  brand: string;
  model: number;
  year: string;
  fuel: number;
  mileage: number;
  color: string;
  price: number;
  fipe_table: number;
  description: string;
  images: IProductImages[];
}

interface IHomeContext {
  list: iListProps;
}

export interface iListProps {
  announcements: iProduct[];
  total: number;
  totalPage: number;
}

export const HomeContext = createContext<IHomeContext>({} as IHomeContext);

export const HomeProvider = ({ children }: iDefaultContextProps) => {
  const [list, setList] = useState<iListProps>({} as iListProps);

  const getProduct = async () => {
    try {
      const product = await api.get("announcements");
      setList(product.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <HomeContext.Provider
      value={{
        list,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
