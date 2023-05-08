import { IProvider } from "src/interfaces/contextApi";
import {
  StyledActionsButtons,
  StyledActionsButtons2,
  StyledModalAnnouncement,
  StyledSectionAnnouncement,
  StyledSelectAnnouncement,
} from "./style";
import Modal from "react-modal";
import ButtonModalClose from "../ButtonClose";
import Text from "src/styles/typography";
import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import api from "src/services/api";

interface IModalAnnouncementProps {
  open: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IArrayCars {
  name: string;
}

interface ICarsProps {
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

type IBrandOptions =
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

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "480px",
    width: "95%",
    height: "95%",
    overflow: "auto",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "100",
  },
};

const ModalAnnouncement = ({ open, setOpenModal }: IModalAnnouncementProps) => {
  const [inputCounter, setInputCounter] = useState([0, 0, 0]);
  const [cars, setCars] = useState<ICarsProps>();
  const [selectedCar, setSelectedCar] = useState<IBrandOptions>("chevrolet");

  const handleClose = () => setOpenModal(false);
  const addArray = () => {
    if (inputCounter.length < 6) {
      setInputCounter([...inputCounter, 0]);
    }
  };

  const removeArray = () => {
    if (inputCounter.length > 3) {
      setInputCounter([...inputCounter.slice(0, -1)]);
    }
  };

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

  return (
    <Modal
      isOpen={open}
      onRequestClose={handleClose}
      style={customStyles}
      contentLabel="Any modal"
      ariaHideApp={false}
    >
      <StyledModalAnnouncement>
        <ButtonModalClose title="Criar anúncio" setState={setOpenModal} />
        <Text>Informações do veículo</Text>

        <StyledSelectAnnouncement>
          <label htmlFor="select-brand">Marca</label>
          <select
            onChange={(e) => setSelectedCar(e.target.value as IBrandOptions)}
            name="select-brand"
            id="select-brand"
          >
            {cars &&
              Object.keys(cars).map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
          </select>
        </StyledSelectAnnouncement>

        <StyledSelectAnnouncement>
          <label htmlFor="select-model">Modelo</label>
          <select name="select-model" id="select-model">
            {cars &&
              cars[selectedCar].map((car: IArrayCars) => (
                <option key={car.name}>{car.name}</option>
              ))}
          </select>
        </StyledSelectAnnouncement>

        <StyledSectionAnnouncement>
          <StyledSelectAnnouncement>
            <label htmlFor="select-year">Ano</label>
            <select name="select-year" id="select-year">
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </select>
          </StyledSelectAnnouncement>
          <StyledSelectAnnouncement>
            <label htmlFor="select-fuel">Combustível</label>
            <select name="select-fuel" id="select-fuel">
              <option value="1">Flex</option>
              <option value="2">Híbrido</option>
              <option value="3">Elétrico</option>
            </select>
          </StyledSelectAnnouncement>
        </StyledSectionAnnouncement>

        <StyledSectionAnnouncement>
          <StyledSelectAnnouncement>
            <label htmlFor="input-km">Quilometragem</label>
            <input placeholder="30.000" id="input-km" type="number" />
          </StyledSelectAnnouncement>
          <StyledSelectAnnouncement>
            <label htmlFor="select-color">Cor</label>
            <select name="select-color" id="select-color">
              <option value="azul">Azul</option>
              <option value="branca">Branca</option>
              <option value="cinza">Cinza</option>
              <option value="prata">Prata</option>
              <option value="preta">Preta</option>
              <option value="verde">Verde</option>
              <option value="outros">Outros</option>
            </select>
          </StyledSelectAnnouncement>
        </StyledSectionAnnouncement>

        <StyledSectionAnnouncement>
          <StyledSelectAnnouncement>
            <label htmlFor="select-pricef">Preço tabela FIPE</label>
            <input id="select-pricef" placeholder="R$ 48.000,00" disabled />
          </StyledSelectAnnouncement>
          <StyledSelectAnnouncement>
            <label htmlFor="input-price">Preço</label>
            <input name="input-price" id="select-price" type="number" />
          </StyledSelectAnnouncement>
        </StyledSectionAnnouncement>

        <StyledSelectAnnouncement>
          <label htmlFor="text-description">Descrição</label>
          <textarea name="text-description" id="text-description" />
        </StyledSelectAnnouncement>

        {inputCounter.map((_, index) => (
          <StyledSelectAnnouncement key={index + "Image-input"}>
            <label htmlFor="text-description">
              {index === 0 ? "Imagem da Capa" : `${index}° Imagem da galeria`}
            </label>
            <input placeholder="https://image.com" type="text" />
          </StyledSelectAnnouncement>
        ))}

        <StyledActionsButtons>
          <button onClick={addArray}>
            Adicionar campo pra imagem da galeria
          </button>
          <button onClick={removeArray}>Remover campo</button>
        </StyledActionsButtons>

        <StyledActionsButtons2>
          <button onClick={handleClose}>Cancelar</button>
          <button>Criar anúncio</button>
        </StyledActionsButtons2>
      </StyledModalAnnouncement>
    </Modal>
  );
};

export default ModalAnnouncement;
