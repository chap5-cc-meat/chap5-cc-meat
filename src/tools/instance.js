import axios from 'axios';

//로컬 스토리지 토큰 가져오기
//const token = localStorage.getItem('token');

// headers: {
//   Authorization: `Bearer ${token}`,
// },

const instance = axios.create({
  baseURL: 'http://localhost:3000',
});

export const meatApi = {
  postSignUps: (payload) => instance.post('/signup', payload),
  // login: (payload) => instance.post('/login', payload),
  // mypage: (payload) => instance.get(`/mypages/${id}`),
  // personal: (payload) => instance.put(`/mypages/${id}/edit`, payload),
  // item: (payload) => instance.get(`/mypages/goods/${id}`),
  // itemdelete: (payload) => instance.delete(`/mypages/${id}/:goodsId`),
  // header: (payload) => instance.get(`/mypages/main/${id}`),
  // boxopen: (payload) => instance.post('/mypages', payload),
  // password: (payload) => instance.put(`/login/password`, payload),
};
