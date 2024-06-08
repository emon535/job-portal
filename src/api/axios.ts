import axios from 'axios';
import store from '../store';

const api = axios.create({
  baseURL: 'https://tasker.mubeendroid.com', 
});

api.interceptors.request.use((config) => {
  const state = store.getState();
  const token = state.auth.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
