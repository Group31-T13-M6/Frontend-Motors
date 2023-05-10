import { IComment } from "./comments";

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

export interface IProduct {
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
  comments: IComment[];
}

export interface IListProps {
  announcements: IProduct[];
  total: number;
  totalPage: number;
}
