import FormLogin from "src/components/FormLogin";
import HeaderNav from "../../components/Header";
import { MainBase } from "src/styles/components/Main";
import Footer from "src/components/Footer/Footer";
import { AuthProvider } from "src/context";

const Login = () => {
  return (
    <AuthProvider>
      <HeaderNav />
      <MainBase>
        <FormLogin />
      </MainBase>
      <Footer />
    </AuthProvider>
  );
};

export default Login;
