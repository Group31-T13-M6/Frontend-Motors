import CarMock from "../../assets/car-mock.png";
import Advertiser from "../../assets/advertiser.png";
import Text from "src/styles/typography";
import CardUl from "./style";

const Card = () => {
    return (
        <CardUl>
            <li> {/* Componente CardsItem */}
              <div className="img-Wrapper">
                <img src={CarMock} alt="Porsche 718"/>
              </div>

              <div className="car-mainInfo">
                <Text tag="h2" fontSize="title-7-600" color="grey1">Porsche 718</Text>
                <Text tag="p" fontSize="body-2-400" color="grey2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...</Text>
              </div>

              <div className="car-advertiser">
                <img src={Advertiser} alt="Anunciante"/>
                <Text tag="p" fontSize="body-2-400" color="grey2">Evelin Camila</Text>
              </div>

              <div className="car-lowInfo">
                <div className="car-lowInfo-text">
                  <Text tag="p" fontSize="body-2-500" color="brand1">0KM</Text>
                  <Text tag="p" fontSize="body-2-500" color="brand1">2019</Text>
                </div>

                <Text tag="p" fontSize="title-7-500" color="grey1">R$ 00.000,00</Text>
              </div>
            </li>
          </CardUl>
    )
}

export default Card