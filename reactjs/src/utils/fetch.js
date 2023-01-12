import axios from '../configs';

export async function getData(url, params) {
  const { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {};

  return await axios.get(url, {
    params,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function postData(url, payload) {
  const { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {};

  return await axios.post(url, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
