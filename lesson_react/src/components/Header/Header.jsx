import './header.scss';
import Container from '../Container/Container';
import logo from '../../images/logo.png'

const Header = ({ children }) => (
  <header className='header'>
    <Container>
      <div className='header__content'>
        <div className='header__logo'>
          <img src={logo} alt="Logo" />
        </div>
        {children}
      </div>
    </Container>
  </header>
);


export default Header;
