import { LinkBorder, MainButton } from "src/styles/components/ButtonsLink";
import FormStyled from "src/styles/components/Form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IUserLogin } from "src/interfaces/login";
import { useContextApi } from "src/context";
import { Input } from "src/styles/components/FormComponents";
import { colors } from "src/styles/components/Colors";
import { useForm } from "react-hook-form";
import Text from "src/styles/typography";

const schema = yup.object().shape({
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
    formState: { errors },
    handleSubmit,
  } = useForm<IUserLogin>({ resolver: yupResolver(schema) });

  return (
    <FormStyled>
      <Text tag="h2" fontSize="title-5-500">
        Login
      </Text>
      <form onSubmit={handleSubmit(postLogin)}>
        <Input>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="text"
            placeholder="Digitar email"
            {...register("email")}
          />
          <Text color="brand1" fontSize="body-2-400">
            {errors.email?.message}
          </Text>
        </Input>
        <Input>
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            placeholder="Digitar senha"
            {...register("password")}
          />
          <Text color="alert1" fontSize="title-1-700">
            {errors.password?.message}
          </Text>
        </Input>
        <MainButton type="submit" background={colors.brand1} textColor="white">
          Entrar
        </MainButton>
        <Text>Ainda não possui conta?</Text>
        <LinkBorder href="/registro">Cadastrar</LinkBorder>
      </form>
    </FormStyled>
  );
};

export default FormLogin;
