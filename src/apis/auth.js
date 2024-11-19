import axios from 'axios';

const auth = axios.create({
  baseURL: import.meta.env.VITE_SERVER_PORT_DOMAIN,
  timeout: 10000,
});

export default auth;
