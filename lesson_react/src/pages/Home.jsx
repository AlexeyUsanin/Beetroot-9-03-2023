import React, { useEffect, useState } from 'react';
import Layout from '../layout/MainLayout';
import Hero from '../components/Hero/Hero';
import Form from '../components/SearchForm/SearchForm';
import List from '../components/List/List';
import photoService from '../service/photo';
import Container from '../components/Container/Container';

const Home = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    // fetch('https://api.pexels.com/v1/curated?api_key=per_page=1', {
    //   method: 'GET',
    //   headers: {
    //     Authorization: API_KEY
    //   }
    // })
    //   .then(response => response.json())
    //   .then(data => setData(data))

    // api.request('GET', 'v1/curated?api_key=per_page=1').then(data => {
    //   setData(data)
    // })

    const getPhoto = async () => {
      const data = await photoService.getCurated();

      setData(data)
    }

    getPhoto()
  }, [])


  const makeSearch = async (query) => {
    // fetch(`https://api.pexels.com/v1/search?query=${query}`, {
    //   method: 'GET',
    //   headers: {
    //     Authorization: API_KEY
    //   }
    // })
    //   .then(response => response.json())
    //   .then(data => setData(data))
    //   .catch(error => console.log('error :>> ', error))

    // try {
    //   const response = await fetch(`https://api.pexels.com/v1/search?query=${query}`, {
    //     method: 'GET',
    //     headers: {
    //       Authorization: API_KEY
    //     }
    //   });
    //   const data = await response.json();

    //   setData(data)
    // } catch (error) {
    //   alert(error);
    // }

    try {
      const data = await photoService.searchPhoto(query)

      setData(data)
    } catch (error) {
      alert(error);
    }
  }

  return (
    <Layout>
      <Hero>
        <h1 className='title'>Homepage</h1>
        <Form onSubmit={makeSearch} />
      </Hero>

      <Container>
        {data.photos && <List data={data} />}
      </Container>
    </Layout>
  )
}


// class Home extends React.Component {

//   componentDidMount() {
//     fetch('https://api.pexels.com/v1/curated?api_key=per_page=1', {
//       method: 'GET',
//       headers: {
//         Authorization: API_KEY
//       }
//     })
//   }

//   render() {
//     return (
//       <Layout>
//         <Hero>
//           <h1 className='title'>Homepage</h1>
//             <Form />
//         </Hero>
//       </Layout>
//     )
//   }
// }

export default Home;