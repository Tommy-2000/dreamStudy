import axios, { AxiosInstance } from 'axios';

export const dreamStudyAxios: AxiosInstance = axios.create({
  baseURL: 'https://localhost:3000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});
