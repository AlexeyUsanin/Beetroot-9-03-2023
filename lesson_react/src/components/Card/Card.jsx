import imgCoffee from '../../images/coffee.png';
import Dropdown from '../Dropdown/Dropdown';

const list = [
  'Download',
  'Add to Favourite'
]

const Card = ({ title, text }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <img src={imgCoffee} alt="Coffee" className="card__image"/>
      <p className="card__text">{text}</p>
      <Dropdown list={list} label="Show options" />
    </div>
  )
}

export default Card;