import { useState } from 'react';
import Text from 'src/styles/typography';
import { useNavigate } from 'react-router-dom';
import ImagemItem from '../ImageItem/ImageItem';
import MainS from './styled';
import Footer from '../Footer/Footer';
import HeaderNav from '../Header/Header';
import ModalImagens from '../ModalImagens/ModalImagens';

const Product = () => {
    const [chosenProduct, setChosenProduct] = useState({
        id: 'f7445e77-d271-4b0e-b9a3-a61c43e57281',
        brand: 'lola',
        model: 'sada',
        year: '2012',
        fuel: 1,
        mileage: 30,
        color: 'blue',
        price: 254,
        fipe_table: 300,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum dolor vel felis volutpat, auctor cursus mi tincidunt. Pellentesque eu velit et velit finibus consectetur a eget odio. Sed ac nulla turpis. In hac habitasse platea dictumst. Nulla facilisi. Sed eget velit purus.',
        isActive: true,
        createdAt: '2023-04-11T00:40:47.764Z',
        updatedAt: '2023-04-11T00:40:47.764Z',
        images: [
            {
                id: '83f9d24b-37d1-4b31-882d-cb503c50da57',
                url: 'https://revistacarro.com.br/wp-content/uploads/2021/06/Fiat-Pulse_1.jpg',
                position: 1,
            },
            {
                id: '72c6fcba-eb89-4f33-b46e-1bae5504262f',
                url: 'https://revistacarro.com.br/wp-content/uploads/2021/06/Fiat-Pulse_1.jpg',
                position: 2,
            },
            {
                id: 'eac4a0b3-4ab8-4b9e-9fc3-6c3aa0f1d4ef',
                url: 'https://revistacarro.com.br/wp-content/uploads/2021/06/Fiat-Pulse_1.jpg',
                position: 3,
            },
            {
                id: '97903763-3741-4ce6-9129-ecce26f728f3',
                url: 'https://img1.gratispng.com/20180610/afc/kisspng-fiat-automobiles-car-fiat-argo-porsche-paris-motor-5b1d45c1db4f18.5025656715286450578983.jpg',
                position: 4,
            },
            {
                id: 'ebbf3842-6018-43ae-aa5c-91b05f7272bf',
                url: 'https://revistacarro.com.br/wp-content/uploads/2021/06/Fiat-Pulse_1.jpg',
                position: 5,
            },
            {
                id: '5bb22cd5-f737-4268-ba0f-d97717d25d88',
                url: 'https://revistacarro.com.br/wp-content/uploads/2021/06/Fiat-Pulse_1.jpg',
                position: 6,
            },
            {
                id: '5bbs22cd5-f737-4268-ba0f-d97717d25d88',
                url: 'https://revistacarro.com.br/wp-content/uploads/2021/06/Fiat-Pulse_1.jpg',
                position: 7,
            },
        ],
    });

    const navigation = useNavigate();

    const realFormated = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
    });

    const callBackBuy = () => {
        const userIsAuthenticated = false;
        if (userIsAuthenticated) {
            navigation('/');
        } else {
            navigation('/login');
        }
    };

    const callOpenModal = (info: string) => {
        setOutClick(true);
        setInfoModal({ img: info });
    };

    const [outClick, setOutClick] = useState(false);
    const [infoModal, setInfoModal] = useState({ img: '' });

    return (
        <>
            <HeaderNav />
            <MainS>
                <section>
                    <div>
                        <div>
                            <img
                                src={chosenProduct.images[0].url}
                                alt='Imagem Product'
                            />
                        </div>
                    </div>
                    <div>
                        <Text tag='h6' fontSize='title-6-600' color='grey1'>
                            {`${chosenProduct.brand} ${chosenProduct.model}`}
                        </Text>
                        <div>
                            <div>
                                <Text
                                    tag='span'
                                    fontSize='body-2-500'
                                    color='brand1'
                                >
                                    {chosenProduct.year}
                                </Text>
                                <Text
                                    tag='span'
                                    fontSize='body-2-500'
                                    color='brand1'
                                >
                                    {`${chosenProduct.mileage} KM`}
                                </Text>
                            </div>
                            <Text tag='p' fontSize='title-7-500' color='grey1'>
                                {realFormated.format(chosenProduct.price)}
                            </Text>
                        </div>
                        <button onClick={callBackBuy}>Comprar</button>
                    </div>
                    <div>
                        <Text tag='h6' fontSize='title-6-600' color='grey1'>
                            Descrição
                        </Text>
                        <Text tag='p' fontSize='body-1-400' color='grey2'>
                            {chosenProduct.description}
                        </Text>
                    </div>
                </section>
                <section>
                    <div>
                        <Text tag='h6' fontSize='title-6-600' color='grey1'>
                            Fotos
                        </Text>
                        <ul>
                            {chosenProduct.images.map(
                                (image) =>
                                    image.position !== 1 && (
                                        <ImagemItem
                                            callOpenModal={callOpenModal}
                                            key={image.id}
                                            image={image}
                                        />
                                    )
                            )}
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
    );
};

export default Product;
