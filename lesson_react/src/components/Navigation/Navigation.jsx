import Dropdown from '../Dropdown/Dropdown';

const nav = [
  'Home',
  'Photos',
  'About'
]

const Navigation = () => {
  return (
    <>
    <nav>
      <ul>
        <li>
          <a href="/home">
            Home
          </a>
        </li>
        <li>
          <a href="/photos">
            Photos
          </a>
        </li>
        <li>
          <a href="/about">
            About
          </a>
        </li>
      </ul>
    </nav>
      <Dropdown list={nav} label="Menu" />
    </>
  )
}

export default Navigation;