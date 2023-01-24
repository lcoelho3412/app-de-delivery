import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
});

export const requestLogin = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);

  return data;
};

export const loginService = async ({ email, password }) => {
  api.post('/login', { email, password });
};

export default api;
