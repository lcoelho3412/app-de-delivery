import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
  headers: 'Access-Control-Allow-Origin',
});

export const requestPost = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);

  return data;
};

export const requestGet = async (endpoint, token) => {
  const { data } = await api.get(endpoint, {
    headers: {
      Authorization: token,
    },
  });

  return data;
};

export const requestPostAdmin = async (endpoint, body, token) => {
  await api.post(endpoint, body, {
    headers: {
      Authorization: token,
    },
  });
};

export const requestDelete = async (endpoint, token) => {
  await api.delete(endpoint, {
    headers: {
      Authorization: token,
    },
  });
};

export const requestProducts = async (token) => {
  try {
    const { data } = await api.get('/products', {
      headers: {
        Authorization: token,
      },
    });

    return data;
  } catch ({ response }) {
    return response.data;
  }
};

export default api;
