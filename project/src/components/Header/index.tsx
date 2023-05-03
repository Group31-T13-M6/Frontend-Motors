import { IoCloseSharp, IoMenu } from "react-icons/io5";
import { useContext, useState } from "react";
import { LinkBorder, MainButton } from "../../styles/components/ButtonsLink";
import { Header } from "../../styles/components/Header";
import { DivHeader, HeaderContainer } from "./style";
import logo from "../../assets/Motors-shop.svg";
import { HomeContext } from "src/context/HomeContext";
import { StyledInitialName } from "src/styles/components/StyledInitialName";
import { useLocation, useNavigate } from "react-router-dom";
import { colors } from "src/styles/components/Colors";

interface IHeaderNavProps {
  id?: string;
  name?: string;
}

const HeaderNav = ({ name, id }: IHeaderNavProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const handleAnnouncementPage = () => {
    navigate(`/profile/${id}`)
  }

  return id ? (
    <Header>
      <HeaderContainer mobileOpen={mobileOpen} className="header-container">
        <a href="/" className="logo">
          <img src={logo} alt="Motors Shop" />
        </a>
        <nav className="header-nav">
          <div className="header-nav-user">
            <StyledInitialName>{name && name[0]}</StyledInitialName>
            <p>{name}</p>
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
              onClick={handleAnnouncementPage}
            >
              Meus Anúncios
            </MainButton>
            <MainButton
              alignItems="start"
              width="70%"
              textColor={colors.grey2}
              font="var(--body-1-400)"
              onClick={handleLogout}
            >
              Sair
            </MainButton>
          </nav>
        </nav>
      </HeaderContainer>
    </Header>
  ) : (
    <Header>
      <DivHeader mobileOpen={mobileOpen} className="header-container">
        <a href="/" className="logo">
          <img src={logo} alt="Motors Shop" />
        </a>
        <nav className="box-options">
          <button
            onClick={() =>
              mobileOpen ? setMobileOpen(false) : setMobileOpen(true)
            }
          >
            <IoMenu />
            <IoCloseSharp />
          </button>
          <div>
            <LinkBorder borderColor="none" href="/login">
              Fazer Login
            </LinkBorder>
            <LinkBorder href="/registro">Cadastrar</LinkBorder>
          </div>
        </nav>
      </DivHeader>
    </Header>
  );
};

export default HeaderNav;
