import axios from 'axios';
import store from '../store';

const api = axios.create({
  baseURL: 'https://tasker.mubeendroid.com', 
});

api.interceptors.request.use((config) => {
  const state = store.getState();
  const token = 'asnerkvehrvewjd%&23rdv!FL*scbweuf&^687wbeHGrmd^&ej67^&*bc5eF%!6XC3E'
  if (token) {
    config.headers.Authorization = `${token}`;
  }
  
  return config;
});

export default api;
