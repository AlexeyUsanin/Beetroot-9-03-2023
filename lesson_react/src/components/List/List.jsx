import Card from '../Card/Card';

const List = ({ data }) => {
  return (
    <ul>
      {data.photos.map(item =>
        <Card
          key={item.id}
          title={item.photographer}
          src={item.src.large}
          alt={item.alt} />
      )}
    </ul>
  )
}

export default List;