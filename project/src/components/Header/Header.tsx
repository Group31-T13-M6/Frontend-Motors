import { Header } from './style';

const HeaderNav = () => {
  return (
    <Header>
      <div className='header-container'>
        <div className='logo'>
          <h1>Motors</h1>
          <span>shop</span>
        </div>
        <div className='box-options'>
          <a href='http://' target='_blank' rel='noopener noreferrer'>
            Fazer Login
          </a>
          <a href='http://' target='_blank' rel='noopener noreferrer'>
            Cadastrar
          </a>
        </div>
      </div>
    </Header>
  );
};

export default HeaderNav;
