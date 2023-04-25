import { IoCloseSharp, IoMenu } from 'react-icons/io5';
import { useState } from 'react';
import { LinkBorder } from '../../styles/components/ButtonsLink';
import { Header } from '../../styles/components/Header';
import { DivHeader } from './style';
import logo from '../../assets/Motors-shop.svg';

const HeaderNav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Header>
      <DivHeader mobileOpen={mobileOpen} className='header-container'>
        <a href='/' className='logo'>
          <img src={logo} alt='Motors Shop' />
        </a>
        <nav className='box-options'>
          <button
            onClick={() =>
              mobileOpen ? setMobileOpen(false) : setMobileOpen(true)
            }
          >
            <IoMenu />
            <IoCloseSharp />
          </button>
          <div>
            <LinkBorder borderColor='none' href='/login'>
              Fazer Login
            </LinkBorder>
            <LinkBorder href='/registro'>Cadastrar</LinkBorder>
          </div>
        </nav>
      </DivHeader>
    </Header>
  );
};

export default HeaderNav;
