import axios from 'axios';

const api = axios.create({
  baseURL: 'https://mock-api.local',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
