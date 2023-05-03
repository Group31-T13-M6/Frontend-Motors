<<<<<<< HEAD
import { IUserRequestAnnouncements, iProduct } from "src/context/HomeContext";
import Text from "src/styles/typography";
import CardComponent from "./style";
import { formatBRL, formatInitialName } from "src/services/helpers";
import { useNavigate } from "react-router-dom";
import { StyledInitialName } from "src/styles/components/StyledInitialName";
=======
import { iProduct } from 'src/context/HomeContext';
import Text from 'src/styles/typography';
import CardComponent from './style';
import { formatBRL } from 'src/services/helpers';
import { useNavigate } from 'react-router-dom';
import { StyledInitialName } from 'src/styles/components/StyledInitialName';
>>>>>>> 2dfea156ec2cfc9e7290a8655165bad84719b9d0

const Card = ({
  id,
  images,
  brand,
  description,
  mileage,
  year,
  price,
  user,
}: iProduct) => {
  const navigate = useNavigate();

<<<<<<< HEAD
  const handleRedirect = () => {
    navigate(`/produto/${id}`);
  };
=======
  const userName = user ? user.name : 'Unknown';
>>>>>>> 2dfea156ec2cfc9e7290a8655165bad84719b9d0

  return (
    <CardComponent onClick={handleRedirect}>
      <div>
<<<<<<< HEAD
        <img className="car-image" src={images && images[0].url} alt="" />
        <div className="car-mainInfo">
          <Text tag="h2" fontSize="title-7-600" color="grey1">
=======
        <img className='car-image' src={images[0].url} alt='' />
        <div className='car-mainInfo'>
          <Text tag='h2' fontSize='title-7-600' color='grey1'>
>>>>>>> 2dfea156ec2cfc9e7290a8655165bad84719b9d0
            {brand}
          </Text>
          <Text tag='p' fontSize='body-2-400' color='grey2'>
            {description}
          </Text>
        </div>
<<<<<<< HEAD
        <div className="car-advertiser">
          <StyledInitialName w="30" h="30">
            {user?.name && user.name[0]}
          </StyledInitialName>
          <Text tag="p" fontSize="body-2-500" color="grey2">
            {user?.name}
=======
        <div className='car-advertiser'>
          <StyledInitialName w='30' h='30'>
            {userName[0]}
          </StyledInitialName>
          <Text tag='p' fontSize='body-3-500' color='grey2'>
            {userName}
>>>>>>> 2dfea156ec2cfc9e7290a8655165bad84719b9d0
          </Text>
        </div>
        <div className='car-lowInfo'>
          <div className='car-lowInfo-text'>
            <Text tag='p' fontSize='body-3-500' color='brand1'>
              {mileage} KM
            </Text>
            <Text tag='p' fontSize='body-3-500' color='brand1'>
              {year}
            </Text>
          </div>

          <Text tag='p' fontSize='title-7-500' color='grey1'>
            {formatBRL(price)}
          </Text>
        </div>
      </div>
    </CardComponent>
  );
};

export default Card;
