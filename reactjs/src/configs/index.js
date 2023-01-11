import axios from 'axios';

import errorHandler from './errorHandler';

const instance = axios.create({
  baseURL: process.env.REACT_APP_HOST_URL,
});

instance.interceptors.response.use((response) => response.data, errorHandler);

export default instance;
