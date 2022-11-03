import axios from 'axios';
import jwt_decode from 'jwt-decode';

//로컬 스토리지 토큰 가져오기
//const token = localStorage.getItem('token');

// headers: {
//   Authorization: `Bearer ${token}`,
// },

const token = document.cookie.replace('token=', '');
// const accesstoken = token && jwt_decode(token);
// const id = accesstoken.userId;

const instance = axios.create({
  // baseURL: 'http://localhost:3001',
  baseURL: 'https://www.iceflower.shop/',
  headers: {
    Authorization: `${token}`,
  },
});

export const meatApi = {
  postSignUps: (payload) => instance.post('/users/signup', payload),
  postLogin: (payload) => instance.post('/users/login', payload),
  getItems: (payload) => instance.get('/carts/'),

  deleteItems: (payload) => instance.delete('/carts/'),
};
