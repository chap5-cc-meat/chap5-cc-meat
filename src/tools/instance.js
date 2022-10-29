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
  baseURL: 'http://52.79.192.62:3000/',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const meatApi = {
  postSignUps: (payload) => instance.post('/users/signup', payload),
  postLogin: (payload) => instance.post('/users/login', payload),
  // mypage: (payload) => instance.get(`/mypages/${id}`),
  // personal: (payload) => instance.put(`/mypages/${id}/edit`, payload),
  // item: (payload) => instance.get(`/mypages/goods/${id}`),
  // itemdelete: (payload) => instance.delete(`/mypages/${id}/:goodsId`),
  // header: (payload) => instance.get(`/mypages/main/${id}`),
  // boxopen: (payload) => instance.post('/mypages', payload),
  // password: (payload) => instance.put(`/login/password`, payload),
};
