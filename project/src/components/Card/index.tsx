import { IUserRequestAnnouncements, iProduct } from "src/context/HomeContext";
import Text from "src/styles/typography";
import CardComponent from "./style";
import { formatBRL, formatInitialName, isImageUrl } from "src/services/helpers";
import { useNavigate } from "react-router-dom";
import { StyledInitialName } from "src/styles/components/StyledInitialName";
import { MainButton } from "src/styles/components/ButtonsLink";

const Card = ({
  id,
  images,
  brand,
  description,
  mileage,
  year,
  price,
  user,
  name,
  isActive,
  status,
  userSection,
  ownerSection,
}: iProduct) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    if (!status) {
      return navigate(`/produto/${id}`);
    }

    navigate(`/login`);
  };

  return (
    <CardComponent onClick={handleRedirect}>
      <div className="main-div">
        {status && (
          <MainButton
            background={isActive ? "var(--brand1)" : "var(--grey4)"}
            textColor="white"
            width="30%"
            height="30%"
            font="var(--body-2-500)"
          >
            {isActive ? "Ativo" : "Inativo"}
          </MainButton>
        )}
        <img
          className="car-image"
          src={
            (images && isImageUrl(images[0].url)) ||
            "https://static-00.iconduck.com/assets.00/no-image-icon-512x512-lfoanl0w.png"
          }
          alt=""
        />
        <div className="car-mainInfo">
          <Text tag="h2" fontSize="title-7-600" color="grey1">
            {brand}
          </Text>
          <Text tag="p" fontSize="body-2-400" color="grey2">
            {description}
          </Text>
        </div>
        {userSection && (
          <div className="car-advertiser">
            <StyledInitialName w="30" h="30">
              {(user?.name && formatInitialName(user.name)) ||
                (name && formatInitialName(name))}
            </StyledInitialName>
            <Text tag="p" fontSize="body-2-500" color="grey2">
              {user?.name || name}
            </Text>
          </div>
        )}
        <div className="car-lowInfo">
          <div className="car-lowInfo-text">
            <Text tag="p" fontSize="body-3-500" color="brand1">
              {mileage} KM
            </Text>
            <Text tag="p" fontSize="body-3-500" color="brand1">
              {year}
            </Text>
          </div>

          <Text tag="p" fontSize="title-7-500" color="grey1">
            {formatBRL(price)}
          </Text>
        </div>
        {ownerSection && (
          <div className="car-OwnerButtons">
            <button>Editar</button>
            <button>Ver detalhes</button>
          </div>
        )}
      </div>
    </CardComponent>
  );
};

export default Card;
