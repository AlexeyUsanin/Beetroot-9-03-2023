import imgCoffee from '../../images/coffee.png';

const Card = ({ title, text }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <img src={imgCoffee} alt="Coffee" className="card__image"/>
      <p className="card__text">{text}</p>
    </div>
  )
}

export default Card;