import Text from "src/styles/typography";

const Sidebar = () => {
  return (
    <aside>
        <div>
            <Text tag="h2" fontSize="title-5-600" color="grey0">Marca</Text>
            <Text tag="p" fontSize="title-7-600" color="grey3">Porsche</Text>
        </div>

        <div>
            <Text tag="h2" fontSize="title-5-600" color="grey0">Modelo</Text>
            <Text tag="p" fontSize="title-7-600" color="grey3">Porsche 718</Text>
        </div>

        <div>
            <Text tag="h2" fontSize="title-5-600" color="grey0">Cor</Text>
            <Text tag="p" fontSize="title-7-600" color="grey3">Azul</Text>
            <Text tag="p" fontSize="title-7-600" color="grey3">Branca</Text>
            <Text tag="p" fontSize="title-7-600" color="grey3">Cinza</Text>
            <Text tag="p" fontSize="title-7-600" color="grey3">Prata</Text>
            <Text tag="p" fontSize="title-7-600" color="grey3">Preta</Text>
            <Text tag="p" fontSize="title-7-600" color="grey3">Verde</Text>
        </div>

        <div>
            <Text tag="h2" fontSize="title-5-600" color="grey0">Ano</Text>
            <Text tag="p" fontSize="title-7-600" color="grey3">2022</Text>
            <Text tag="p" fontSize="title-7-600" color="grey3">2021</Text>
            <Text tag="p" fontSize="title-7-600" color="grey3">2018</Text>
            <Text tag="p" fontSize="title-7-600" color="grey3">2015</Text>
            <Text tag="p" fontSize="title-7-600" color="grey3">2013</Text>
            <Text tag="p" fontSize="title-7-600" color="grey3">2012</Text>
            <Text tag="p" fontSize="title-7-600" color="grey3">2010</Text>
        </div>

        <div>
            <Text tag="h2" fontSize="title-5-600" color="grey0">Combustível</Text>
            <Text tag="p" fontSize="title-7-600" color="grey3">Diesel</Text>
            <Text tag="p" fontSize="title-7-600" color="grey3">Etanol</Text>
            <Text tag="p" fontSize="title-7-600" color="grey3">Gasolina</Text>
            <Text tag="p" fontSize="title-7-600" color="grey3">Flex</Text>
        </div>

        <div>
            <Text tag="h2" fontSize="title-5-600" color="grey0">Km</Text>
            <button>Mímimo</button> {/* Componente Button para estilo */}
            <button>Máximo</button> {/* Componente Button para estilo */}
        </div>
        
        <div>
            <Text tag="h2" fontSize="title-5-600" color="grey0">Preço</Text>
            <button>Mímimo</button> {/* Componente Button para estilo */}
            <button>Máximo</button> {/* Componente Button para estilo */}
        </div>

        <button>Limpar filtros</button> {/* Componente Button para estilo */}
    </aside>
  );
};

export default Sidebar;