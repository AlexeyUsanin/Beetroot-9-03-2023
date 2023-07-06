import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Layout from '../layout/MainLayout';
import Container from '../components/Container/Container';
import photoService from '../service/photo';

const Photo = () => {
  const { photoId } = useParams();
  const [data, setData] = useState({});
  console.log('photoId :>> ', photoId);

  useEffect(() => {
    const getPhoto = async (id) => {
      const data = await photoService.getPhoto(id)

      setData(data)
    }

    getPhoto(photoId);
  }, [photoId])

  return (
    <Layout>
      <Container>
        {data.src &&
          <>
            <h1>{data.photographer}</h1>
            <img src={data.src.portrait} alt={data.alt} />
            <a href={data.photographer_url} target='_blank' rel="noreferrer">
              Photographer profile
            </a>
        </>}
      </Container>
    </Layout>
  )
}

export default Photo;