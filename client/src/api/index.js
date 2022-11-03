import axios from 'axios';
import { API_URL } from '../models/constants';

export const instance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const apiGetData = response => response.data;

export default instance;