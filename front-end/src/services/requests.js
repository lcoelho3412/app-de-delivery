import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
  headers: 'Access-Control-Allow-Origin',
});

export const requestLogin = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);

  return data;
};

export const loginService = async (
  { email,
    password,
  },
) => {
  try {
    const { data } = await api.post('/login', { email, password });

    return data;
  } catch (error) {
    return error.response.data;
  }
};

export default api;
