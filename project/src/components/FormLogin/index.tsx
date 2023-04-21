import { LinkBorder, MainButton } from "src/styles/components/ButtonsLink";
import FormStyled from "src/styles/components/Form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useForm } from "react-hook-form";
import { IUserLogin } from "src/interfaces/login";
import { useContextApi } from "src/context";
import { Input } from "src/styles/components/FormComponents";
import { colors } from "src/styles/components/Colors";

const schema = yup.object({
  email: yup
    .string()
    .email("Deve ser um email valido")
    .required("Email é obrigatório"),
  password: yup.string().required("Senha é obrigatório"),
});

const FormLogin = () => {
  const { postLogin } = useContextApi();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({
    resolver: yupResolver(schema),
  });

  return (
    <FormStyled>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(postLogin)}>
        <Input>
          <label htmlFor="email">Usuário</label>
          <input
            id="email"
            type="email"
            placeholder="Digitar usuário"
            {...register("email")}
          />
        </Input>
        <Input>
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            placeholder="lorem eeeeeeee"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
        </Input>
        <MainButton type="submit" background={colors.brand1} textColor="white">
          Entrar
        </MainButton>
        <p>Ainda não possui conta?</p>
        <LinkBorder href="/registro">Cadastrar</LinkBorder>
      </form>
    </FormStyled>
  );
};

export default FormLogin;
