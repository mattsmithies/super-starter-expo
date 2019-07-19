import axios from 'axios';
import { API_URL } from 'src/config';
import { logRequest, logResponse, logError } from './logging';

const MaydaymeAppAxios = axios.create({
  baseURL: API_URL,
});

MaydaymeAppAxios.interceptors.request.use(
  (config) => {
    logRequest(config);
    return config;
  },
  (error) => {
    console.log('request errr', error);
    return Promise.reject(error);
  },
);

MaydaymeAppAxios.interceptors.response.use(
  (response) => {
    logResponse(response);
    return response;
  },
  (error) => {
    if (error.response) {
      logError(error.response);
    }
    return Promise.reject(error);
  },
);

export default MaydaymeAppAxios;
