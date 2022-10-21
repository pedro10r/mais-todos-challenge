import axios from 'axios';

const api = axios.create({
  baseURL: 'https://5efb30ac80d8170016f7613d.mockapi.io/api/mock/',
});

export default api;
