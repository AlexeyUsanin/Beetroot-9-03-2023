import React, { useEffect, useState } from 'react';
import Layout from '../layout/MainLayout';
import Hero from '../components/Hero/Hero';
import Form from '../components/SearchForm/SearchForm';
import List from '../components/List/List';

const API_KEY = process.env.REACT_APP_API_KEY

const Home = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    fetch('https://api.pexels.com/v1/curated?api_key=per_page=1', {
      method: 'GET',
      headers: {
        Authorization: API_KEY
      }
    })
      .then(response => response.json())
      .then(data => setData(data))
  }, [])

  console.log('data :>> ', data);

  return (
    <Layout>
      <Hero>
        <h1 className='title'>Homepage</h1>
        <Form />
      </Hero>

      {data.photos && <List data={data} />}
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