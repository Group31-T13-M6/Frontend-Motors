export interface IActualModelProps {
  id: string;
  brand: string;
  year: string;
  fuel: 1 | 2 | 3;
  value: number;
  name: string;
}

export type IBrandOptions =
  | "chevrolet"
  | "citroen"
  | "fiat"
  | "ford"
  | "honda"
  | "hyundai"
  | "nissan"
  | "peugeot"
  | "renault"
  | "toyota"
  | "volkswagen";

export interface IArrayCars {
  name: string;
}

export interface ICarsProps {
  chevrolet: IArrayCars[];
  citroen: IArrayCars[];
  fiat: IArrayCars[];
  ford: IArrayCars[];
  honda: IArrayCars[];
  hyundai: IArrayCars[];
  nissan: IArrayCars[];
  peugeot: IArrayCars[];
  renault: IArrayCars[];
  toyota: IArrayCars[];
  volkswagen: IArrayCars[];
}

export interface IImage {
  url: string;
  position: number;
}

export interface IUseFormAnnouncement {
  brand: string;
  model: string;
  year: string;
  fuel: string;
  mileage: number;
  color: string;
  price: number;
  fipe_table: string;
  description: string;
  images: IImage[];
}

export interface IModalAnnouncementProps {
  open: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}
