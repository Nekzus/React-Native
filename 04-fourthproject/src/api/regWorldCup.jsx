import axios from 'axios';

export const reqWorldApi = axios.create({
  baseURL: 'https://worldcupjson.net',
});
