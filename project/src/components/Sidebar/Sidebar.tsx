import ScrollableContainer from '../../styles/components/ScrollBar';
import Text from '../../styles/typography';
import { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { DivHeader } from '../Header/style';
import { Aside, SectionFilter } from './style';

const Sidebar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleClick = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <>
            <DivHeader mobileOpen={mobileOpen} className='header-container'>
                <SectionFilter>
                    <Text>Tipo</Text>
                    <Text>Cor</Text>
                    <button onClick={handleClick}>
                        <Text>Filtro</Text>
                    </button>
                </SectionFilter>
            </DivHeader>
            <Aside className={mobileOpen ? 'show' : ''}>
                <div className='box-aside'>
                    <button onClick={handleClick}>
                        <IoCloseSharp />
                    </button>
                    <Text tag='span'>Filtro</Text>
                </div>
                <ScrollableContainer>
                    <section>
                        <div>
                            <Text tag='h4' fontSize='title-5-600' color='grey0'>
                                Marca
                            </Text>
                            <Text tag='p' fontSize='title-7-600' color='grey3'>
                                Porsche
                            </Text>
                        </div>
                        <div>
                            <Text tag='h2' fontSize='title-5-600' color='grey0'>
                                Modelo
                            </Text>
                            <Text tag='p' fontSize='title-7-600' color='grey3'>
                                Porsche 718
                            </Text>
                        </div>
                        <div>
                            <Text tag='h2' fontSize='title-5-600' color='grey0'>
                                Cor
                            </Text>
                            <Text tag='p' fontSize='title-7-600' color='grey3'>
                                Azul
                            </Text>
                            <Text tag='p' fontSize='title-7-600' color='grey3'>
                                Branca
                            </Text>
                            <Text tag='p' fontSize='title-7-600' color='grey3'>
                                Cinza
                            </Text>
                            <Text tag='p' fontSize='title-7-600' color='grey3'>
                                Prata
                            </Text>
                            <Text tag='p' fontSize='title-7-600' color='grey3'>
                                Preta
                            </Text>
                            <Text tag='p' fontSize='title-7-600' color='grey3'>
                                Verde
                            </Text>
                        </div>
                        <div>
                            <Text tag='h2' fontSize='title-5-600' color='grey0'>
                                Ano
                            </Text>
                            <Text tag='p' fontSize='title-7-600' color='grey3'>
                                2022
                            </Text>
                            <Text tag='p' fontSize='title-7-600' color='grey3'>
                                2021
                            </Text>
                            <Text tag='p' fontSize='title-7-600' color='grey3'>
                                2018
                            </Text>
                            <Text tag='p' fontSize='title-7-600' color='grey3'>
                                2015
                            </Text>
                            <Text tag='p' fontSize='title-7-600' color='grey3'>
                                2013
                            </Text>
                            <Text tag='p' fontSize='title-7-600' color='grey3'>
                                2012
                            </Text>
                            <Text tag='p' fontSize='title-7-600' color='grey3'>
                                2010
                            </Text>
                        </div>
                        <div>
                            <Text tag='h2' fontSize='title-5-600' color='grey0'>
                                Combustível
                            </Text>
                            <Text tag='p' fontSize='title-7-600' color='grey3'>
                                Diesel
                            </Text>
                            <Text tag='p' fontSize='title-7-600' color='grey3'>
                                Etanol
                            </Text>
                            <Text tag='p' fontSize='title-7-600' color='grey3'>
                                Gasolina
                            </Text>
                            <Text tag='p' fontSize='title-7-600' color='grey3'>
                                Flex
                            </Text>
                        </div>
                        <div>
                            <Text tag='h2' fontSize='title-5-600' color='grey0'>
                                Km
                            </Text>
                            <button className='filter-button'>Mínimo</button>{' '}
                            {/* Componente Button para estilo */}
                            <button className='filter-button'>
                                Máximo
                            </button>{' '}
                            {/* Componente Button para estilo */}
                        </div>
                        <div>
                            <Text tag='h2' fontSize='title-5-600' color='grey0'>
                                Preço
                            </Text>
                            <button className='filter-button'>Mínimo</button>{' '}
                            {/* Componente Button para estilo */}
                            <button className='filter-button'>
                                Máximo
                            </button>{' '}
                            {/* Componente Button para estilo */}
                        </div>
                    </section>
                    <div className='clear-filter'>
                        <button>Limpar filtros</button>
                        {/* Componente Button para estilo */}
                    </div>
                </ScrollableContainer>
            </Aside>
        </>
    );
};

export default Sidebar;
