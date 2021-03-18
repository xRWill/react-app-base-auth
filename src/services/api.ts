import axios, { AxiosRequestConfig } from 'axios';

const options: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_API_URL,
};

const api = axios.create(options);

export default api;
