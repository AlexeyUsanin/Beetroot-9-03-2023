import { Link } from 'react-router-dom'
import CardMUI from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Card = ({ title, text, alt, src, id }) => {
  return (
    <Link to={`/photos/${id}/`}>
      <CardMUI sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 240 }}
          image={src}
        title={alt}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        </CardContent>
      </CardMUI>
    </Link>
  )
}

export default Card;