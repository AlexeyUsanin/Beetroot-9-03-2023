import Grid from '@mui/material/Grid';

import Card from '../Card/Card';

const List = ({ data }) => {
  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
          {data.photos.map(item =>
            <Grid key={item.id} item xs={4}>
              <Card
                key={item.id}
                title={item.photographer}
                src={item.src.large}
                alt={item.alt}
                id={item.id} />
            </Grid>)}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default List;