import { MockFuelInverter } from "src/context/Mocks";
import * as yup from "yup";

const createAnnouncementImages = yup.object().shape({
  url: yup.string().required(),
  position: yup.number().required().positive().max(6),
});

const createAnnouncementSchema = yup.object().shape({
  brand: yup.string().required("Campo obrigatório"),
  model: yup.string().required("Campo obrigatório"),
  year: yup
    .string()
    .required("Campo obrigatório")
    .max(4, "Máximo de 4 Caracteres"),
  fuel: yup.string().required("Campo obrigatório"),
  mileage: yup
    .number()
    .positive("Campo deve ter um número.")
    .required("Campo obrigatório")
    .max(999999, "Deve haver menos de 1 milhão de km."),
  color: yup.string().required("Campo obrigatório").max(30),
  price: yup.number().positive().required("Campo obrigatório"),
  fipe_table: yup
    .string()
    .required("Campo obrigatório"),
  description: yup.string().required("Campo obrigatório").max(320),
  images: yup
    .array(createAnnouncementImages)
    .required()
    .min(3, "Seu anúncio deve ter no mínimo 3 imagens."),
});

export { createAnnouncementSchema };
