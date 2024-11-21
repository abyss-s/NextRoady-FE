import axios from 'axios';

const auth = axios.create({
  baseURL: import.meta.env.VITE_SERVER_DOMAIN_PORT,
  timeout: 30000,
});

export default auth;
