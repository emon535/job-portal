import api from './axios';

export const login = async (username: string, password: string) => {
  const response = await api.post('/api/sign-in', { username, password });
  return response.data;
};
