import Footer from 'src/components/Footer/Footer';
import HeaderNav from 'src/components/Header/Header';
import Text from 'src/styles/typography';

const LandingPage = () => {
  return (
    <>
      <HeaderNav />
      <Text tag='h2' fontSize='title-3-500' color='brand1'>
        Landing Page
      </Text>
      <Footer />
    </>
  );
};

export default LandingPage;
