import { useState } from 'react';
import { Header, NavMenu, Bars } from './style';

const HeaderNav = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <Header>
      <div className='header-container'>
        <div className='logo'>
          <h1>Motors</h1>
          <span>shop</span>
        </div>
        <nav className='box-options'>
          <div
            className='toggle'
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <Bars />
          </div>
          <NavMenu
            className={
              isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'
            }
          >
            <li>
              <a href='http://' target='_blank' rel='noopener noreferrer'>
                Fazer Login
              </a>
            </li>
            <li>
              <a href='http://' target='_blank' rel='noopener noreferrer'>
                Cadastrar
              </a>
            </li>
          </NavMenu>
        </nav>
      </div>
    </Header>
  );
};

export default HeaderNav;
