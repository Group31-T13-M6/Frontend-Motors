import { useEffect, useState } from "react";
import Text from "src/styles/typography";
import ImagemItem from "../ImageItem/ImageItem";
import MainS from "./styled";
import Footer from "../Footer/Footer";
import HeaderNav from "../Header/Header";
import ModalImagens from "../ModalImagens/ModalImagens";
import api from "src/services/api";
import { useNavigate, useParams } from "react-router-dom";
import { iProduct } from "src/context/HomeContext";
import { formatBRL } from "src/services/helpers";

const Product = () => {
  const [chosenProduct, setChosenProduct] = useState<iProduct>();
  const { id } = useParams();

  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        const response = await api.get(`/announcements/${id}`);
        setChosenProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAnnouncement();
  }, []);

  const navigation = useNavigate();

  const callBackBuy = () => {
    const userIsAuthenticated = false;
    if (userIsAuthenticated) {
      navigation("/");
    } else {
      navigation("/login");
    }
  };

  const callOpenModal = (info: string) => {
    setOutClick(true);
    setInfoModal({ img: info });
  };

  const [outClick, setOutClick] = useState(false);
  const [infoModal, setInfoModal] = useState({ img: "" });

  return (
    <>
      {chosenProduct && (
        <>
          <HeaderNav />
          <MainS>
            <section>
              <div>
                <div>
                  <img src={chosenProduct.images[0].url} alt="Imagem Product" />
                </div>
              </div>
              <div>
                <Text tag="h6" fontSize="title-6-600" color="grey1">
                  {`${chosenProduct.brand} ${chosenProduct.model}`}
                </Text>
                <div>
                  <div>
                    <Text tag="span" fontSize="body-2-500" color="brand1">
                      {chosenProduct.year}
                    </Text>
                    <Text tag="span" fontSize="body-2-500" color="brand1">
                      {`${chosenProduct.mileage} KM`}
                    </Text>
                  </div>
                  <Text tag="p" fontSize="title-7-500" color="grey1">
                    {formatBRL(chosenProduct.price)}
                  </Text>
                </div>
                <button onClick={callBackBuy}>Comprar</button>
              </div>
              <div>
                <Text tag="h6" fontSize="title-6-600" color="grey1">
                  Descrição
                </Text>
                <Text tag="p" fontSize="body-1-400" color="grey2">
                  {chosenProduct.description}
                </Text>
              </div>
            </section>
            <section>
              <div>
                <Text tag="h6" fontSize="title-6-600" color="grey1">
                  Fotos
                </Text>
                <ul>
                  {chosenProduct.images.map((image) => (
                    <ImagemItem
                      callOpenModal={callOpenModal}
                      key={image.id}
                      image={image}
                    />
                  ))}
                </ul>
              </div>
              <div></div>
            </section>
            <ModalImagens
              infoModal={infoModal}
              outClick={outClick}
              setOutClick={setOutClick}
            />
          </MainS>
          <Footer />
        </>
      )}
    </>
  );
};

export default Product;
