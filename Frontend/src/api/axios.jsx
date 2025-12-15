import axios from 'axios';

const api = axios.create({
  baseURL: 'https://task-manager-ref4-1cmjn2alf-shuvam776s-projects.vercel.app', 
  withCredentials: true,
});

export default api;
