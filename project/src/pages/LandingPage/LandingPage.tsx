import Sidebar from "src/components/Sidebar/Sidebar";
import Text from "src/styles/typography";
import ReactPaginate from "react-paginate";
import HeaderNav from "src/components/Header/Header";
import Footer from "src/components/Footer/Footer";
import Card from "src/components/Card/Card";
import { Section, Main, Separator } from "./styles";

const LandingPage = () => {
  return (
    <div>
      <HeaderNav />

      <Section>
        <div className="intro-text">
          <Text tag="h1" fontSize="title-2-600" color="grey10">
            Motors Shop
          </Text>
          <Text tag="p" fontSize="title-5-600" color="grey10">
            A melhor plataforma de anúncios de carros do país
          </Text>
        </div>
      </Section>

      <Separator>
        <Sidebar />

        <Main>
          <Card />

          <ReactPaginate
            previousLabel={""}
            nextLabel={"Seguinte >"}
            pageCount={1}
          />
        </Main>
      </Separator>

      <Footer />
    </div>
  );
};

export default LandingPage;
