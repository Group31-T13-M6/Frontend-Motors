import { useState } from "react";
import logo from "src/assets/Motors-shop.svg";
import { LinkBorder, MainButton } from "src/styles/components/ButtonsLink";
import { colors } from "src/styles/components/Colors";
import { Header } from "src/styles/components/Header";
import { HeaderContainer } from "./style";

const HeaderDashboard = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const user = {
    name: "Samuel Leão",
  };

  const firstLettersName = () => {
    let name = user.name.split(" ");
    let letters = name.map((element) => element[0]);
    return letters;
  };

  return (
    <Header>
      <HeaderContainer mobileOpen={mobileOpen} className="header-container">
        <a href="/" className="logo">
          <img src={logo} alt="Motors Shop" />
        </a>
        <nav className="header-nav">
          <div className="header-nav-user">
            <div>{firstLettersName()}</div>
            <p>{user.name}</p>
          </div>
          <nav>
            <MainButton
              alignItems="start"
              width="70%"
              textColor={colors.grey2}
              font="var(--body-1-400)"
            >
              Editar Perfil
            </MainButton>
            <MainButton
              alignItems="start"
              width="70%"
              textColor={colors.grey2}
              font="var(--body-1-400)"
            >
              Editar endereço
            </MainButton>
            <MainButton
              alignItems="start"
              width="70%"
              textColor={colors.grey2}
              font="var(--body-1-400)"
            >
              Meus Anúncios
            </MainButton>
            <MainButton
              alignItems="start"
              width="70%"
              textColor={colors.grey2}
              font="var(--body-1-400)"
            >
              Sair
            </MainButton>
          </nav>
        </nav>
      </HeaderContainer>
    </Header>
  );
};

export default HeaderDashboard;
