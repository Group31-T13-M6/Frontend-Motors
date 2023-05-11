import api from "src/services/api";
import Modal from "react-modal";
import ButtonModalClose from "../ButtonClose";
import Text from "src/styles/typography";
import { useContext, useEffect, useState } from "react";
import { AxiosError } from "axios";
import { MockColors, MockFuel } from "src/context/Mocks";
import {
  IActualModelProps,
  IBrandOptions,
  ICarsProps,
  IModalAnnouncementProps,
  IUseFormAnnouncement,
} from "src/interfaces/Modals/announcement";
import {
  StyledActionsButtons,
  StyledActionsButtons2,
  StyledModalAnnouncement,
  StyledSectionAnnouncement,
  StyledSelectAnnouncement,
  customStylesAnnouncement,
} from "./style";
import { formatBRL } from "src/services/helpers";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createAnnouncementSchema } from "src/schema/announcements";
import { HomeContext } from "src/context/HomeContext";

const ModalAnnouncement = ({ open, setOpenModal }: IModalAnnouncementProps) => {
  const { createAnnouncement } = useContext(HomeContext);
  const [inputCounter, setInputCounter] = useState([0, 0, 0]);
  const [loading, setLoading] = useState(true);
  const [cars, setCars] = useState<ICarsProps>();
  const [actualModel, setActualModel] = useState<IActualModelProps>(
    {} as IActualModelProps
  );
  const [selectedBrand, setSelectedBrand] =
    useState<IBrandOptions>("chevrolet");
  const [selectedBrandCars, setSelectedBrandCars] = useState<
    IActualModelProps[]
  >([]);

  const {
    formState: { errors },
    register,
    handleSubmit,
    control,
  } = useForm<IUseFormAnnouncement>({
    resolver: yupResolver(createAnnouncementSchema),
  });

  const { fields, append, remove, update } = useFieldArray({
    control,
    name: "images",
  });

  const handleCloseModal = () => setOpenModal(false);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await api.get(
          "https://kenzie-kars.herokuapp.com/cars"
        );

        setCars(response.data);
      } catch (err) {
        if (err instanceof AxiosError) {
          const error = err.response?.data;
          console.log(error.message);
        }
      }
    };

    fetchCars();
  }, []);

  useEffect(() => {
    const fetchCarsBrand = async () => {
      try {
        const response = await api.get(
          `https://kenzie-kars.herokuapp.com/cars?brand=${selectedBrand}`
        );

        setActualModel(response.data[0]);
        setSelectedBrandCars(response.data);
      } catch (err) {
        if (err instanceof AxiosError) {
          const error = err.response?.data;
          console.log(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCarsBrand();
  }, [selectedBrand]);

  const handleActualModel = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const findElement = selectedBrandCars.find(
      (elem) => elem.name === e.target.value
    );
    return setActualModel(findElement || selectedBrandCars[0]);
  };

  const handleActualBrand = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as IBrandOptions;
    return setSelectedBrand(value);
  };

  const addImageInput = () => {
    if (inputCounter.length < 6) {
      setInputCounter([...inputCounter, 0]);
    }
  };

  const removeImageInput = () => {
    const lastIndex = inputCounter.length - 1;
    if (inputCounter.length > 3) {
      setInputCounter([...inputCounter.slice(0, -1)]);
      remove(lastIndex);
    }
  };

  const handleDynamicsInputs = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    if (fields[index]) {
      return update(index, {
        position: index + 1,
        url: e.target.value,
      });
    }

    return append({ position: index + 1, url: e.target.value });
  };

  return loading ? null : (
    <Modal
      isOpen={open}
      onRequestClose={handleCloseModal}
      style={customStylesAnnouncement}
      contentLabel="Any modal"
      ariaHideApp={false}
    >
      <StyledModalAnnouncement onSubmit={handleSubmit(createAnnouncement)}>
        <ButtonModalClose title="Criar anúncio" setState={setOpenModal} />
        <Text>Informações do veículo</Text>

        <StyledSelectAnnouncement>
          <label htmlFor="select-brand">Marca</label>
          <select
            {...register("brand")}
            onChange={handleActualBrand}
            id="select-brand"
          >
            {cars &&
              Object.keys(cars).map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
          </select>
          <Text fontSize="input-label" color="alert1">
            {errors?.brand?.message}
          </Text>
        </StyledSelectAnnouncement>

        <StyledSelectAnnouncement>
          <label htmlFor="select-model">Modelo</label>
          <select
            {...register("model")}
            onChange={handleActualModel}
            id="select-model"
          >
            {selectedBrandCars &&
              selectedBrandCars.map((car: IActualModelProps, index: number) => (
                <option value={car.name} key={car.name}>
                  {car.name}
                </option>
              ))}
          </select>
          <Text fontSize="input-label" color="alert1">
            {errors?.model?.message}
          </Text>
        </StyledSelectAnnouncement>

        <StyledSectionAnnouncement>
          <StyledSelectAnnouncement>
            <label htmlFor="input-year">Ano</label>
            <input
              id="input-year"
              {...register("year")}
              value={actualModel.year}
              readOnly
            />
            <Text fontSize="input-label" color="alert1">
              {errors?.year?.message}
            </Text>
          </StyledSelectAnnouncement>
          <StyledSelectAnnouncement>
            <label htmlFor="input-fuel">Combustível</label>
            <input
              {...register("fuel")}
              id="input-fuel"
              value={MockFuel[actualModel.fuel]}
              readOnly
            />
            <Text fontSize="input-label" color="alert1">
              {errors?.fuel?.message}
            </Text>
          </StyledSelectAnnouncement>
        </StyledSectionAnnouncement>

        <StyledSectionAnnouncement>
          <StyledSelectAnnouncement>
            <label htmlFor="input-km">Quilometragem</label>
            <input
              required
              {...register("mileage")}
              placeholder="30.000"
              id="input-km"
              type="number"
            />
            <Text fontSize="input-label" color="alert1">
              {errors?.mileage?.message}
            </Text>
          </StyledSelectAnnouncement>
          <StyledSelectAnnouncement>
            <label htmlFor="select-color">Cor</label>
            <select {...register("color")} id="select-color">
              {MockColors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
            <Text fontSize="input-label" color="alert1">
              {errors?.color?.message}
            </Text>
          </StyledSelectAnnouncement>
        </StyledSectionAnnouncement>

        <StyledSectionAnnouncement>
          <StyledSelectAnnouncement>
            <label htmlFor="select-pricef">Preço tabela FIPE</label>
            <input
              {...register("fipe_table")}
              id="select-pricef"
              value={formatBRL(actualModel.value)}
              readOnly
            />
            <Text fontSize="input-label" color="alert1">
              {errors?.fipe_table?.message}
            </Text>
          </StyledSelectAnnouncement>
          <StyledSelectAnnouncement>
            <label htmlFor="input-price">Preço</label>
            <input
              {...register("price")}
              required
              placeholder="R$ 30.000,00"
              id="select-price"
              type="number"
            />
            <Text fontSize="input-label" color="alert1">
              {errors?.price?.message}
            </Text>
          </StyledSelectAnnouncement>
        </StyledSectionAnnouncement>

        <StyledSelectAnnouncement>
          <label htmlFor="text-description">Descrição</label>
          <textarea {...register("description")} id="text-description" />
          <Text fontSize="input-label" color="alert1">
            {errors?.description?.message}
          </Text>
        </StyledSelectAnnouncement>

        {inputCounter.map((_, index) => (
          <StyledSelectAnnouncement key={index + "Image-input"}>
            <label htmlFor="text-description">
              {index === 0 ? "Imagem da Capa" : `${index}° Imagem da galeria`}
            </label>
            <input
              onChange={(e) => handleDynamicsInputs(e, index)}
              placeholder="https://image.com"
              type="text"
            />
          </StyledSelectAnnouncement>
        ))}

        <Text fontSize="input-label" color="alert1">
          {errors?.images?.message}
        </Text>

        <StyledActionsButtons>
          <button type="button" onClick={addImageInput}>
            Adicionar campo pra imagem da galeria
          </button>
          <button type="button" onClick={removeImageInput}>
            Remover campo
          </button>
        </StyledActionsButtons>

        <StyledActionsButtons2>
          <button onClick={handleCloseModal}>Cancelar</button>
          <button>Criar anúncio</button>
        </StyledActionsButtons2>
      </StyledModalAnnouncement>
    </Modal>
  );
};

export default ModalAnnouncement;
