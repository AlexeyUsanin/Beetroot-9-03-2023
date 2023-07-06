import { NavLink } from 'react-router-dom';
import './navigation.scss';

const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__list-item">
          <NavLink to="/" className='nav__list-link'>
            Home
          </NavLink>
        </li>
        <li className="nav__list-item">
          <NavLink to="/photos" className='nav__list-link'>
            Photos
          </NavLink>
        </li>
        <li className="nav__list-item">
          <NavLink to="NavLinkbout" className='nav__list-link'>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;