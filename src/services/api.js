import axios from 'axios';

const api = axios.create({
  //baseURL: 'http://192.168.100.10:3000',
  baseURL: 'https://plataforma-joti.herokuapp.com/',
});

export default api;
