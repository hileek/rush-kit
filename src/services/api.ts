import axios from 'axios';
import storage from '@/utils/storage';

const api = axios.create({
  baseURL: process.env.REACT_APP_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求拦截器
api.interceptors.request.use(
  (config) => {
    console.log(process.env);
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
api.interceptors.response.use(
  (response) => {
    console.log(response, 'response');
    const { code, message, data } = response.data;
    if (code === 401 ) {
      // 调用登出接口，清除store
      storage.clear();
    }
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
