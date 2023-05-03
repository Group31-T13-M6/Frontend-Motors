import Footer from "src/components/Footer/Footer";
import FormRegister from "src/components/FormRegister";
import HeaderNav from "src/components/Header";
import { MainBase } from "src/styles/components/Main";

const Register = () => {
  return (
    <>
      <HeaderNav />
      <MainBase>
        <FormRegister />
      </MainBase>
      <Footer />
    </>
  );
};

export default Register;
