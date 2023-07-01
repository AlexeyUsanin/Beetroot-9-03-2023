import imgCoffee from '../../images/coffee.png';
import Dropdown from '../Dropdown/Dropdown';

const list = [
  'Download',
  'Add to Favourite'
]

const Card = ({ title, text, alt, src }) => {
  return (
    <li className="card">
      <h3>{title}</h3>
      <img src={src} alt={alt} className="card__image"/>
      <p className="card__text">{text}</p>
      <Dropdown list={list} label="Show options" />
    </li>
  )
}

export default Card;