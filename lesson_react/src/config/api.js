const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = 'https://api.pexels.com/';

const api = {
  baseURL: API_URL,
  request: async function (method, url) {
    try {
      const response = await fetch(`${this.baseURL}${url}`, {
        method: method,
        headers: {
          Authorization: API_KEY
        }
      });
      const data = await response.json();

      return data;
    } catch (error) {
      console.log('error :>> ', error);
    }
  }
}

export default api;