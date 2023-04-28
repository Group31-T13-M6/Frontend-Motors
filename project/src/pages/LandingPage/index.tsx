import Sidebar from "src/components/Sidebar/Sidebar";
import Text from "src/styles/typography";
import HeaderNav from "src/components/Header/Header";
import Footer from "src/components/Footer/Footer";
import Card from "src/components/Card";
import { Section, Main, Separator } from "./styles";
import { useContext } from "react";
import { HomeContext, iProduct } from "src/context/HomeContext";

const LandingPage = () => {
  const {
    list: { announcements },
  } = useContext(HomeContext);

  return (
    <>
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
          {announcements &&
            announcements.map((item: iProduct, index: number) => (
              <Card key={index} {...item} />
            ))}
        </Main>
      </Separator>
      <Footer />
    </>
  );
};

export default LandingPage;