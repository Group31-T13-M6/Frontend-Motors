import Sidebar from "src/components/Sidebar/Sidebar";
import Text from "src/styles/typography";
import HeaderNav from "src/components/Header";
import Footer from "src/components/Footer/Footer";
import Card from "src/components/Card";
import { Section, Main, Separator } from "./styles";
import { useContext, useEffect } from "react";
import { HomeContext, iProduct } from "src/context/HomeContext";

const LandingPage = () => {
  const {
    list: { announcements },
    user,
    loading,
    getProduct,
    getLoggedUser,
  } = useContext(HomeContext);

  useEffect(() => {
    const fetchHomePage = async () => {
      try {
        await getProduct();
        await getLoggedUser();
      } catch (error) {
        console.log(error);
      }
    };

    fetchHomePage();
  }, []);

  return loading ? (
    <p>Loading...</p>
  ) : (
    <>
      {!loading && <HeaderNav name={user?.name} id={user?.id} />}
      <Section>
        <div className='intro-text'>
          <Text tag='h1' fontSize='title-2-600' color='grey10'>
            Motors Shop
          </Text>

          <Text tag='p' fontSize='title-5-600' color='grey10'>
            A melhor plataforma de anúncios de carros do país
          </Text>
        </div>
      </Section>

      <Separator>
        <Sidebar />
        <Main>
          <ul>
            {announcements &&
              announcements.map((item: iProduct, index: number) => (
                <Card key={index} {...item} />
              ))}
          </ul>
        </Main>
      </Separator>
      <Footer />
    </>
  );
};

export default LandingPage;
