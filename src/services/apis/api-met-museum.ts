import axios from 'axios';

const api = axios.create({
  baseURL: 'https://collectionapi.metmuseum.org/public/collection/v1/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
