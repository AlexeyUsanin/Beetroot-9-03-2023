import './button.scss';

const Button = ({ children, color }) => {
  let buttonColor = '';

  switch (color) {
    case 'red':
      buttonColor = 'red';
      break;
    case 'purple':
      buttonColor = 'purple';
      break;
    case 'orange':
      buttonColor = 'orange';
      break;
    default:
      buttonColor = 'green';
  }

  return (
    // <button className={`button ${color === 'secondary' ? 'button--secondary' : ''}`}>  {children}
    // </button>
    <button className={`button ${buttonColor}`}>{children}</button>
  )
}


export default Button;