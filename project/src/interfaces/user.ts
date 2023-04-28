export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserRegister {
  name: string;
  email: string;
  cpf: string;
  phone_number: string;
  date_birth: string;
  description: string;
  type_user: string;
  password: string;
  address?: IAddressRegister;
  confirmPassword: string;
}

interface IAddressRegister {
  cep: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement?: string;
  userId: string;
}
