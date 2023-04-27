import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContextApi } from "src/context";
import { useForm } from "react-hook-form";
import { createUserSchema } from "src/schema/user";
import { IUserRegister } from "src/interfaces/user";
import { cepMask, cpfMask, dateMask, phoneMask } from "./masks";
import {
  Input,
  InputPassword,
  TextArea,
} from "src/styles/components/FormComponents";
import { MainButton } from "src/styles/components/ButtonsLink";
import FormStyled from "src/styles/components/Form";
import { colors } from "src/styles/components/Colors";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";

const FormRegister = () => {
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [cep, setCep] = useState("");
  const [typeUser, setTypeUser] = useState("Buyer");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { postRegister } = useContextApi();

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
  } = useForm<IUserRegister>({ resolver: yupResolver(createUserSchema) });

  useEffect(() => {
    setValue("cpf", cpf);
  }, [cpf]);

  useEffect(() => {
    setValue("phone_number", phone);
  }, [phone]);

  useEffect(() => {
    if (date.length < 10) {
      setValue("date_birth", date);
    } else {
      const dateArray = date.split("/");
      const newDate = dateArray.reverse().join("/");
      setValue("date_birth", newDate);
    }
  }, [date]);

  useEffect(() => {
    setValue("type_user", typeUser);
  }, [typeUser]);

  useEffect(() => {
    setValue("address.cep", cep);
  }, [cep]);

  return (
    <FormStyled height="auto" onSubmit={handleSubmit(postRegister)}>
      <h2>Cadastro</h2>
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

        <h3 className="address">Infomações de endereço</h3>

        <Input>
          <label htmlFor="cep">CEP</label>
          <input
            id="cep"
            type="text"
            placeholder="00.000-000"
            onChange={(event) => {
              handleChangeMask(event, setCep, cepMask);
            }}
            value={cep}
            maxLength={10}
          />
          <p>{errors.address?.cep?.message}</p>
        </Input>

        <div className="two-components">
          <Input width="48%">
            <label htmlFor="state">Estado</label>
            <input
              id="state"
              type="text"
              placeholder="Digitar estado"
              {...register("address.state")}
            />
            <p>{errors.address?.state?.message}</p>
          </Input>
          <Input width="48%">
            <label htmlFor="city">Cidade</label>
            <input
              id="city"
              type="text"
              placeholder="Digitar cidade"
              {...register("address.city")}
            />
            <p>{errors.address?.city?.message}</p>
          </Input>
        </div>

        <Input>
          <label htmlFor="street">Rua</label>
          <input
            id="street"
            type="text"
            placeholder="Digitar rua"
            {...register("address.street")}
          />
          <p>{errors.address?.street?.message}</p>
        </Input>

        <div className="two-components">
          <Input width="48%">
            <label htmlFor="number">Número</label>
            <input
              id="number"
              type="text"
              placeholder="Digitar Número"
              {...register("address.number")}
            />
            <p>{errors.address?.number?.message}</p>
          </Input>
          <Input width="48%">
            <label htmlFor="complement">Complemento</label>
            <input
              id="complement"
              type="text"
              placeholder="Ex: apart 307"
              {...register("address.complement")}
            />
            <p>{errors.address?.complement?.message}</p>
          </Input>
        </div>

        <label htmlFor="userType"  className="address-label-type-user">
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
            Anuciante
          </MainButton>
        </div>

        <InputPassword>
          <label htmlFor="password">Senha</label>
          <div>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Digitar senha"
              {...register("password")}
            />
            <button
              type="button"
              onClick={() =>
                showPassword ? setShowPassword(false) : setShowPassword(true)
              }
            >
              {showPassword ? <BsEyeSlashFill /> : <BsEyeFill />}
            </button>
          </div>
          <p>{errors.password?.message}</p>
        </InputPassword>

        <InputPassword>
          <label htmlFor="confirmPassword">Confirmar Senha</label>
          <div>
            <input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Digitar senha"
              {...register("confirmPassword")}
            />
            <button
              type="button"
              onClick={() =>
                showConfirmPassword
                  ? setShowConfirmPassword(false)
                  : setShowConfirmPassword(true)
              }
            >
              {showConfirmPassword ? <BsEyeSlashFill /> : <BsEyeFill />}
            </button>
          </div>
          <p>{errors.confirmPassword?.message}</p>
        </InputPassword>

        <MainButton type="submit" background={colors.brand1} textColor="white">
          Finalizar cadastro
        </MainButton>
      </form>
    </FormStyled>
  );
};

export default FormRegister;
