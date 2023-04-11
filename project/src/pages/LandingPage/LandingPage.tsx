import Sidebar from "src/components/Sidebar/Sidebar";
import Text from "src/styles/typography";
import PhotoHome from "../../assets/photoHome.png";
import CarMock from "../../assets/car-mock.png";
import Advertiser from "../../assets/advertiser.png";
import ReactPaginate from "react-paginate";

const LandingPage = () => {
  return (
    <div>
      {/* Componente Header */}
      
      <section>
        <div>
          <img src={PhotoHome} alt="Carro da BMW"/>
        </div>

        <Text tag="h1" fontSize="title-2-600">Motors Shop</Text>
        <Text tag="p" fontSize="title-5-600">A melhor plataforma de anúncios de carros do país</Text>
      </section>

      <Sidebar/>

      <main>
        <ul> {/* Componente Cards */}
          <li> {/* Componente CardsItem */}
            <div>
              <img src={CarMock} alt="Porsche 718"/>
            </div>

            <Text tag="h2" fontSize="title-7-600" color="grey1">Porsche 718</Text>
            <Text tag="p" fontSize="body-2-400" color="grey2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...</Text>

            <div>
              <img src={Advertiser} alt="Anunciante"/>
              <Text tag="p" fontSize="body-2-400" color="grey2">Evelin Camila</Text>
            </div>

            <div>
              <div>
                <Text tag="p" fontSize="body-2-500" color="brand1">0KM</Text>
                <Text tag="p" fontSize="body-2-500" color="brand1">2019</Text>
              </div>

              <Text tag="p" fontSize="title-7-500" color="grey1">R$ 00.000,00</Text>
            </div>
          </li>
        </ul>

        <ReactPaginate
        previousLabel={""}
        nextLabel = {"Seguinte >"}
        pageCount={1}/>
      </main>

      {/* Componente Footer */}
    </div>
  );
};

export default LandingPage;