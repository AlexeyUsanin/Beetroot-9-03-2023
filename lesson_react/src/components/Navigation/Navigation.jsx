import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.scss';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { ThemeContext } from '../../App';

const Navigation = () => {
  const theme = useContext(ThemeContext);
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked ? true : false);
    theme.setTheme(e.target.checked ? 'dark' : 'light');
    document.querySelector('body').classList.toggle('dark')
  };

  console.log('checked :>> ', checked);
  console.log('theme :>> ', theme);

  return (
    <nav className={`nav nav--${theme.theme}`}>
      <ul className="nav__list">
        <li className="nav__list-item">
          <NavLink to="/" className="nav__list-link">
            Home
          </NavLink>
        </li>
        <li className="nav__list-item">
          <NavLink to="/photos" className="nav__list-link">
            Photos
          </NavLink>
        </li>
        <li className="nav__list-item">
          <NavLink to="NavLinkbout" className="nav__list-link">
            About
          </NavLink>
        </li>
        <FormGroup>
          <FormControlLabel
            control={<Switch onChange={handleChange} checked={checked} />}
            label={`${theme.theme === 'dark' ? 'Light' : 'Dark'} mode`}
          />
        </FormGroup>
      </ul>
    </nav>
  );
};

export default Navigation;
