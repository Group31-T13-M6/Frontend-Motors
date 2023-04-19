import FormLogin from "src/components/FormLogin";
import HeaderNav from "../../components/Header/Header";
import { MainBase } from "src/styles/components/Main";
import Footer from "src/components/Footer/Footer";

const Login = () => {
  return (
    <>
      <HeaderNav></HeaderNav>
      <MainBase>
        <FormLogin />
      </MainBase>
      <Footer />
    </>
  );
};

export default Login;
