import { useState } from "react";
import Text from "src/styles/typography";
import { useNavigate } from "react-router-dom";
import ImagemItem from "../ImageItem/ImageItem";
import MainS from "./styled";

const Product = () => {
  const [chosenProduct, setChosenProduct] = useState({
    id: "f7445e77-d271-4b0e-b9a3-a61c43e57281",
    brand: "lola",
    model: "sada",
    year: "2012",
    fuel: 1,
    mileage: 30,
    color: "blue",
    price: 254,
    fipe_table: 300,
    description: "asjdfaosdfasdofjasoidfa",
    isActive: true,
    createdAt: "2023-04-11T00:40:47.764Z",
    updatedAt: "2023-04-11T00:40:47.764Z",
    images: [
      {
        id: "83f9d24b-37d1-4b31-882d-cb503c50da57",
        url: "https://revistacarro.com.br/wp-content/uploads/2021/06/Fiat-Pulse_1.jpg",
        position: 1,
      },
      {
        id: "72c6fcba-eb89-4f33-b46e-1bae5504262f",
        url: "https://revistacarro.com.br/wp-content/uploads/2021/06/Fiat-Pulse_1.jpg",
        position: 2,
      },
      {
        id: "eac4a0b3-4ab8-4b9e-9fc3-6c3aa0f1d4ef",
        url: "https://revistacarro.com.br/wp-content/uploads/2021/06/Fiat-Pulse_1.jpg",
        position: 3,
      },
      {
        id: "97903763-3741-4ce6-9129-ecce26f728f3",
        url: "https://revistacarro.com.br/wp-content/uploads/2021/06/Fiat-Pulse_1.jpg",
        position: 4,
      },
      {
        id: "ebbf3842-6018-43ae-aa5c-91b05f7272bf",
        url: "https://revistacarro.com.br/wp-content/uploads/2021/06/Fiat-Pulse_1.jpg",
        position: 5,
      },
      {
        id: "5bb22cd5-f737-4268-ba0f-d97717d25d88",
        url: "https://revistacarro.com.br/wp-content/uploads/2021/06/Fiat-Pulse_1.jpg",
        position: 6,
      },
    ],
  });

  const navigation = useNavigate();

  const realFormated = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });

  const callBackBuy = () => {
    const userIsAuthenticated = false;
    if (userIsAuthenticated) {
      navigation("/");
    } else {
      navigation("/login");
    }
  };

  return (
    <>
      <header></header>
      <MainS>
        <section>
          <div>
            <div>
              <img src={chosenProduct.images[0].url} alt="Imagem Product" />
            </div>
          </div>
          <ul>
            <Text tag="h6" fontSize="title-6-600" color="grey1">
              Fotos
            </Text>
            {chosenProduct.images.map(
              (image) =>
                image.position !== 1 && (
                  <ImagemItem key={image.id} image={image} />
                )
            )}
          </ul>
        </section>
        <section>
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
                {realFormated.format(chosenProduct.price)}
              </Text>
            </div>
            <button onClick={callBackBuy}>Comprar</button>
          </div>
        </section>
      </MainS>
      <footer></footer>
    </>
  );
};

export default Product;
