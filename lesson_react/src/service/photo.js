import api from '../config/api';

const photoService = {
  getCurated: async function () {
    const data = await api.request('GET', 'v1/curated?api_key=per_page=1')

    return data;
  },
  searchPhoto: async function (query) {
    if (!query) {
      throw new Error('Empty query')
    }

    const data = await api.request('GET', `v1/search?query=${query}`);

    return data;
  }
}

export default photoService;