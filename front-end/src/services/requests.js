import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
  headers: 'Access-Control-Allow-Origin',
});

export const request = async (endpoint, method, body) => {
  const { data } = await api[method](endpoint, body || null);

  return data;
};

export default api;
