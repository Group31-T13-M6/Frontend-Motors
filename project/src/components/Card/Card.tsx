import { iProduct } from "src/context/HomeContext";
import Advertiser from "../../assets/advertiser.png";
import Text from "src/styles/typography";
import CardComponent from "./style";
import { formatBRL } from "src/services/helpers";
import { useNavigate } from "react-router-dom";

const Card = ({
  id,
  images,
  brand,
  description,
  mileage,
  year,
  price,
}: iProduct) => {
  const navigate = useNavigate();

  return (
    <CardComponent onClick={() => navigate(`/produto/${id}`)}>
      <div>
        <img className="car-image" src={images[0].url} alt="" />
        <div className="car-mainInfo">
          <Text tag="h2" fontSize="title-7-600" color="grey1">
            {brand}
          </Text>
          <Text tag="p" fontSize="body-2-400" color="grey2">
            {description}
          </Text>
        </div>
        <div className="car-advertiser">
          <img src={Advertiser} alt="Anunciante" />
          <Text tag="p" fontSize="body-2-400" color="grey2">
            Evelin Camila
          </Text>
        </div>
        <div className="car-lowInfo">
          <div className="car-lowInfo-text">
            <Text tag="p" fontSize="body-2-500" color="brand1">
              {mileage} KM
            </Text>
            <Text tag="p" fontSize="body-2-500" color="brand1">
              {year}
            </Text>
          </div>

          <Text tag="p" fontSize="title-7-500" color="grey1">
            {formatBRL(price)}
          </Text>
        </div>
      </div>
    </CardComponent>
  );
};

export default Card;

//           {/* <ReactPaginate
//   previousLabel={""}
//   nextLabel={"Seguinte >"}
//   pageCount={1}
// /> */}
