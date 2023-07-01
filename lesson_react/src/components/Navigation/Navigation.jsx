import './navigation.scss';

const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__list-item">
          <a href="/home" className='nav__list-link'>
            Home
          </a>
        </li>
        <li className="nav__list-item">
          <a href="/photos" className='nav__list-link'>
            Photos
          </a>
        </li>
        <li className="nav__list-item">
          <a href="/about" className='nav__list-link'>
            About
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;