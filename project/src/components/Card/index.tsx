import { iProduct } from 'src/context/HomeContext';
import Text from 'src/styles/typography';
import CardComponent from './style';
import { formatBRL } from 'src/services/helpers';
import { useNavigate } from 'react-router-dom';
import { StyledInitialName } from 'src/styles/components/StyledInitialName';

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

  const userName = user ? user.name : 'Unknown';

  return (
    <CardComponent onClick={() => navigate(`/produto/${id}`)}>
      <div>
        <img className='car-image' src={images[0].url} alt='' />
        <div className='car-mainInfo'>
          <Text tag='h2' fontSize='title-7-600' color='grey1'>
            {brand}
          </Text>
          <Text tag='p' fontSize='body-2-400' color='grey2'>
            {description}
          </Text>
        </div>
        <div className='car-advertiser'>
          <StyledInitialName w='30' h='30'>
            {userName[0]}
          </StyledInitialName>
          <Text tag='p' fontSize='body-3-500' color='grey2'>
            {userName}
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
