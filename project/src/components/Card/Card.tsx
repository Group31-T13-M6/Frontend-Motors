import { iProduct } from "src/context/HomeContext";
import Advertiser from "../../assets/advertiser.png";
import Text from "src/styles/typography";
import CardComponent from "./style";

export interface IAnnouncProps {
    announcements: iProduct[];
}

const Card = ({ announcements }: IAnnouncProps) => {
    return (
        <ul>
            {announcements &&
                announcements.map((product, index) => (
                    <CardComponent key={index}>
                        <div>
                            <div className="img-Wrapper">{product.images}</div>
                            <div className="car-mainInfo">
                                <Text
                                    tag="h2"
                                    fontSize="title-7-600"
                                    color="grey1"
                                >
                                    {product.brand}
                                </Text>
                                <Text
                                    tag="p"
                                    fontSize="body-2-400"
                                    color="grey2"
                                >
                                    {product.description}
                                </Text>
                            </div>
                            <div className="car-advertiser">
                                <img src={Advertiser} alt="Anunciante" />
                                <Text
                                    tag="p"
                                    fontSize="body-2-400"
                                    color="grey2"
                                >
                                    Evelin Camila
                                </Text>
                            </div>
                            <div className="car-lowInfo">
                                <div className="car-lowInfo-text">
                                    <Text
                                        tag="p"
                                        fontSize="body-2-500"
                                        color="brand1"
                                    >
                                        {product.mileage}
                                    </Text>
                                    <Text
                                        tag="p"
                                        fontSize="body-2-500"
                                        color="brand1"
                                    >
                                        {product.year}
                                    </Text>
                                </div>

                                <Text
                                    tag="p"
                                    fontSize="title-7-500"
                                    color="grey1"
                                >
                                    {product.price}
                                </Text>
                            </div>
                        </div>
                    </CardComponent>
                ))}
        </ul>
    );
};

export default Card;

//           {/* <ReactPaginate
//   previousLabel={""}
//   nextLabel={"Seguinte >"}
//   pageCount={1}
// /> */}
