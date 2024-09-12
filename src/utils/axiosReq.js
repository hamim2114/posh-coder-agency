import Cookies from 'js-cookie';
import axios from 'axios';

const token = localStorage.getItem('poshcoder');

const baseURL = window.location.hostname === 'localhost' 
  ? 'http://localhost:5000/api' 
  : 'https://posh-coder-server.vercel.app/api';

export const axiosReq = axios.create({
  baseURL: baseURL,
  withCredentials: true,
  headers: {
    Authorization: token,
  },
});

// axiosReq.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem('poshcoder');
//         if (token) {
//             config.headers['Authorization'] = token; // Append token to Authorization header
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );
