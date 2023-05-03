import { createContext, useState, useEffect } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { AxiosResponse } from "axios";

export interface IUserRequestAnnouncements {
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
  is_active: boolean;
  createdAt: string;
  updatedAt: string;
  userId: string;
}

export interface IUserRequestAddress {
  id: string;
  cep: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface IUserRequest {
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
  address: IUserRequestAddress;
  announcements: IUserRequestAnnouncements[];
}

export interface iDefaultContextProps {
  children: React.ReactNode;
}

export interface IProductImages {
  id: string;
  url: string;
  position: number;
}

export interface IProductUser {
  id: string;
  name: string;
  description: string;
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
  user: IProductUser;
  name?: string;
  isActive: boolean;
  status: boolean;
  userSection?: boolean;
  ownerSection?: boolean;
}

export interface iListProps {
  announcements: iProduct[];
  total: number;
  totalPage: number;
}

export interface IHomeContext {
  list: iListProps;
  user?: IUserRequest;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  getProduct: () => Promise<void>;
  getLoggedUser: () => Promise<void>;
  getActualProfile: (
    id: string
  ) => Promise<AxiosResponse<IUserRequest> | undefined>;
  userSearched?: IUserRequest;
  isOwner: boolean;
}

export const HomeContext = createContext<IHomeContext>({} as IHomeContext);

export const HomeProvider = ({ children }: iDefaultContextProps) => {
  const [list, setList] = useState<iListProps>({} as iListProps);
  const [user, setUser] = useState<IUserRequest>();
  const [loading, setLoading] = useState(true);
  const [isOwner, setIsOwner] = useState(false);
  const [searchedId, setSearchedId] = useState('');

  const navigate = useNavigate();

  const getProduct = async () => {
    try {
      const product = await api.get("announcements");
      setList(product.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getLoggedUser = async () => {
    setLoading(true);
    const token = localStorage.getItem("@UserToken");

    if (!token) {
      setLoading(false);
      return;
    }

    try {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const user = await api.get(`users`);
      setUser(user.data);
      return;
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getActualProfile = async (id: string) => {
    setLoading(true);

    try {
      const userSearched = await api.get(`users/${id}`);
      setSearchedId(userSearched.data.id)
      
      return userSearched;
    } catch (error) {
      console.error(error);
      navigate("/");
    } finally {
      setLoading(false);
      
      if(searchedId == user?.id) {
        setIsOwner(true);
      }
    }
  };

  return (
    <HomeContext.Provider
      value={{
        list,
        user,
        loading,
        setLoading,
        getProduct,
        getLoggedUser,
        getActualProfile,
        isOwner
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
