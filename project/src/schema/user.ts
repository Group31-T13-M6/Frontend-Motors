import * as yup from "yup";

export const createAddressSchema = yup.object().shape({
  cep: yup.string().required("O cep é necessário"),
  state: yup.string().required("O estado é necessário"),
  city: yup.string().required("A cidade é necessária"),
  street: yup.string().required("A rua é necessário"),
  number: yup.string().required("O número é necessário"),
  complement: yup.string(),
});

export const createUserSchema = yup.object().shape({
  name: yup.string().required("O nome é necessário.").max(50),
  email: yup
    .string()
    .email("Formato de email inválido.")
    .required("O email é necessário.")
    .max(50),
  cpf: yup.string().required("O cpf é necessário."),
  phone_number: yup.string().required("O número de celular é necessário."),
  date_birth: yup
    .string()
    .required("A data de nascimento é necessária.")
    .min(10)
    .max(10),
  description: yup.string().required("A descrição é necessária.").max(320),
  type_user: yup.string().oneOf(["Advertiser", "Buyer"]).required(),
  password: yup
    .string()
    .required("Senha é necessária.")
    .min(8, "A senha deve ter 8 caracteres.")
    .matches(/[0-9]/, "A senha requer um número.")
    .matches(/[a-z]/, "A senha requer uma letra minúscula.")
    .matches(/[A-Z]/, "A senha requer uma letra maiúscula.")
    .matches(/[^\w]/, "A senha requer um símbolo."),
  confirmPassword: yup
    .string()
    .required("A confirmação da senha é necessária.")
    .oneOf([yup.ref("password")], "As senhas devem corresponder"),
  address: createAddressSchema.required(),
});
