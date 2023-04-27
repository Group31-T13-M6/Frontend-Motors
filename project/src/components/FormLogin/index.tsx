import { LinkBorder, MainButton } from "src/styles/components/ButtonsLink";
import FormStyled from "src/styles/components/Form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContextApi } from "src/context";
import { Input, InputPassword } from "src/styles/components/FormComponents";
import { colors } from "src/styles/components/Colors";
import { useForm } from "react-hook-form";
import { IUserLogin } from "src/interfaces/user";
import { useState } from "react";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Deve ser um email valido")
    .required("Email é obrigatório"),
  password: yup.string().required("Senha é obrigatório"),
});

const FormLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { postLogin } = useContextApi();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IUserLogin>({ resolver: yupResolver(schema) });

  return (
    <FormStyled>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(postLogin)}>
        <Input>
          <label htmlFor="email" id="email-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Digitar seu email"
            {...register("email")}
            aria-label="Digite seu e-mail"
            aria-labelledby="email-label"
          />
        </Input>
        <InputPassword>
          <label htmlFor="password" id="password-label">
            Senha
          </label>
          <div>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Digitar senha"
              {...register("password")}
              aria-label="Digitar senha"
              aria-labelledby="password-label"
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
        <MainButton type="submit" background={colors.brand1} textColor="white">
          Entrar
        </MainButton>
        <p className="register-question">Ainda não possui conta?</p>
        <LinkBorder href="/registro">Cadastrar</LinkBorder>
      </form>
    </FormStyled>
  );
};

export default FormLogin;
