import axios from '../configs';

export async function getData(url, params) {
  const accessToken = localStorage.getItem('accessToken') || {};

  return await axios.get(url, {
    params,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}

export async function postData(url, payload) {
  const accessToken = localStorage.getItem('accessToken') || {};

  return await axios.post(url, payload, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}
