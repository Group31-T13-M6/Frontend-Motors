import { createContext, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { AxiosResponse } from "axios";
import { IUseFormAnnouncement } from "src/interfaces/Modals/announcement";
import { desformatBRL } from "src/services/helpers";
import { MockFuelInverter } from "./Mocks";

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
import { IUser } from "src/interfaces/user";
import { IListProps, IProduct } from "src/interfaces/products";
import { IUpdateAndRegisterComment } from "src/interfaces/comments";

export interface iDefaultContextProps {
  children: React.ReactNode;
}

export interface IHomeContext {
  list: IListProps;
  user?: IUser;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  getProduct: () => Promise<void>;
  getLoggedUser: () => Promise<void>;
  getActualProfile: (id: string) => Promise<AxiosResponse<IUser> | undefined>;
  userSearched?: IUser;
  isOwner: boolean;
  createAnnouncement: (data: IUseFormAnnouncement) => Promise<void>;
  chosenProduct: IProduct | undefined;
  setChosenProduct(product: IProduct): void;
  getAnnouncementId(id: string): void;
  postComment(data: IUpdateAndRegisterComment): void;
  deleteComment(id: string): void;
  updateComment(id: string, data: IUpdateAndRegisterComment): void;
}

export const HomeContext = createContext<IHomeContext>({} as IHomeContext);

export const HomeProvider = ({ children }: iDefaultContextProps) => {
  const [list, setList] = useState<IListProps>({} as IListProps);
  const [user, setUser] = useState<IUser>();
  const [loading, setLoading] = useState(true);
  const [isOwner, setIsOwner] = useState(false);
  const [searchedId, setSearchedId] = useState("");
  const [chosenProduct, setChosenProduct] = useState<IProduct>();

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
      setSearchedId(userSearched.data.id);

      return userSearched;
    } catch (error) {
      console.error(error);
      navigate("/");
    } finally {
      setLoading(false);

      if (searchedId === user?.id) {
        setIsOwner(true);
      }
    }
  };

  const createAnnouncement = async (data: IUseFormAnnouncement) => {
    const fipe_table = desformatBRL(data.fipe_table);
    const fuel = MockFuelInverter[data.fuel];

    try {
      await api.post(`announcements`, { ...data, fuel, fipe_table });
    } catch (error) {
      console.error(error);
      navigate("/");
    }
  };

  const getAnnouncementId = async (id: string) => {
    try {
      await getLoggedUser();
      const response = await api.get(`/announcements/${id}`);
      setChosenProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const postComment = async (data: IUpdateAndRegisterComment) => {
    try {
      await api.post(`/comments/announcements/${chosenProduct?.id}`, data);
      getAnnouncementId(chosenProduct?.id as string);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteComment = async (id: string) => {
    try {
      await api.delete(`/comments/${id}`);
      getAnnouncementId(chosenProduct?.id as string);
    } catch (error) {
      console.error(error);
    }
  };

  const updateComment = async (id: string, data: IUpdateAndRegisterComment) => {
    try {
      await api.patch(`/comments/${id}`, data);
      getAnnouncementId(chosenProduct?.id as string);
    } catch (error) {
      console.error(error);
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
        createAnnouncement,
        isOwner,
        getAnnouncementId,
        chosenProduct,
        setChosenProduct,
        postComment,
        deleteComment,
        updateComment,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
