import Modal from "react-modal";
import ButtonModalClose from "../ButtonClose";
import Text from "src/styles/typography";
import FormStyled from "src/styles/components/Form";
import { Input, TextArea } from "src/styles/components/FormComponents";
import { useContext, useEffect, useState } from "react";
import { updateUserSchema } from "src/schema/user";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { cpfMask, dateMask, phoneMask } from "src/services/masks";
import { MainButton } from "src/styles/components/ButtonsLink";
import { colors } from "src/styles/components/Colors";
import { IUserUpdate } from "src/interfaces/user";
import { HomeContext } from "src/context/HomeContext";

interface IModalProps {
  open: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

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

const ModalUpdateUser = ({ open, setOpenModal }: IModalProps) => {
  const { user, patchUser } = useContext(HomeContext);
  const handleClose = () => setOpenModal(false);

  const [cpf, setCpf] = useState(user?.cpf || "");
  const [phone, setPhone] = useState(user?.phone_number || "");
  const [date, setDate] = useState(user?.date_birth || "");
  const [typeUser, setTypeUser] = useState(user?.type_user || "");

  const handleChangeMask = (event: any, setState: any, method: any) => {
    let { value } = event.target;
    setState(method(value));
  };

  const handleClick = () => {
    if (typeUser === "Buyer") {
      setTypeUser("Advertiser");
    } else {
      setTypeUser("Buyer");
    }
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<IUserUpdate>({
    resolver: yupResolver(updateUserSchema),
    defaultValues: {
      name: user?.name,
      email: user?.email,
      description: user?.description,
      type_user: user?.type_user,
    },
  });

  useEffect(() => {
    if (user) {
      let date = user.date_birth.split("T")[0]
      const dateArray = date.split("-");
      const newDate = dateArray.reverse().join("/");
      setDate(newDate);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setValue("cpf", cpf);
    // eslint-disable-next-line
  }, [cpf]);

  useEffect(() => {
    setValue("phone_number", phone);
    // eslint-disable-next-line
  }, [phone]);

  useEffect(() => {
    if (date.length < 10) {
      setValue("date_birth", date);
    } else {
      const dateArray = date.split("/");
      const newDate = dateArray.reverse().join("/");
      setValue("date_birth", newDate);
    }
    // eslint-disable-next-line
  }, [date]);

  useEffect(() => {
    setValue("type_user", typeUser);
    // eslint-disable-next-line
  }, [typeUser]);

  return (
    <Modal
      isOpen={open}
      onRequestClose={handleClose}
      style={customStyles}
      contentLabel="Any modal"
      ariaHideApp={false}
    >
      <ButtonModalClose title="Editar perfil" setState={setOpenModal} />

      <FormStyled
        height="auto"
        onSubmit={handleSubmit(patchUser)}
        width="100%"
        maxWidth="none"
        maxFormWidth="none"
      >
        <Text tag="h3">Infomações pessoais</Text>
        <form>
          <Input>
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              type="name"
              placeholder="Ex: Samuel Leão"
              {...register("name")}
            />
            <p>{errors.name?.message}</p>
          </Input>

          <Input>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Ex: samuel@kenzie.com.br"
              {...register("email")}
            />
            <p>{errors.email?.message}</p>
          </Input>

          <Input>
            <label htmlFor="cpf">CPF</label>
            <input
              id="cpf"
              type="text"
              placeholder="000.000.000-00"
              onChange={(event) => {
                handleChangeMask(event, setCpf, cpfMask);
              }}
              value={cpf}
              maxLength={14}
            />
            <p>{errors.cpf?.message}</p>
          </Input>
          <Input>
            <label htmlFor="phone_number">Celular</label>
            <input
              id="phone_number"
              type="phone_number"
              placeholder="(DDD) 90000-0000"
              onChange={(event) => {
                handleChangeMask(event, setPhone, phoneMask);
              }}
              maxLength={15}
              value={phone}
            />
            <p>{errors.phone_number?.message}</p>
          </Input>

          <Input>
            <label htmlFor="date">Data de nascimento</label>
            <input
              id="date"
              type="text"
              placeholder="00/00/0000"
              onChange={(event) => {
                handleChangeMask(event, setDate, dateMask);
              }}
              maxLength={10}
              value={date}
            />
            <p>{errors.date_birth?.message}</p>
          </Input>

          <TextArea>
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              placeholder="Digitar descrição"
              {...register("description")}
            />
            <p>{errors.description?.message}</p>
          </TextArea>

          <label htmlFor="userType" className="address-label-type-user">
            Tipo de conta
          </label>

          <div className="two-components" id="userType">
            <MainButton
              type="button"
              borderColor={typeUser === "Buyer" ? "none" : colors.grey4}
              background={typeUser === "Advertiser" ? "none" : colors.brand1}
              textColor={typeUser === "Buyer" ? "white" : colors.grey1}
              width="50%"
              onClick={handleClick}
            >
              Comprador
            </MainButton>
            <MainButton
              type="button"
              background={typeUser === "Buyer" ? "none" : colors.brand1}
              borderColor={typeUser === "Advertiser" ? "none" : colors.grey4}
              textColor={typeUser === "Advertiser" ? "white" : colors.grey1}
              width="50%"
              onClick={handleClick}
            >
              Anunciante
            </MainButton>
          </div>

          <div className="update-user">
            <MainButton
              width="32%"
              type="submit"
              background={colors.brand1}
              textColor="white"
            >
              Editar
            </MainButton>
            <MainButton
              type="button"
              width="32%"
              background={colors.alert2}
              textColor={colors.alert1}
            >
              Excluir Perfil
            </MainButton>
            <MainButton
              type="button"
              width="32%"
              background={colors.grey6}
              textColor={colors.grey2}
              onClick={() => {
                handleClose();
              }}
            >
              Cancelar
            </MainButton>
          </div>
        </form>
      </FormStyled>
    </Modal>
  );
};

export default ModalUpdateUser;
