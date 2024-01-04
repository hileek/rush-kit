import axios from 'axios';
import { message } from 'antd';
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
    const { code, message: msg, data } = response.data;
    console.log(code, msg, data);
    if (code === 200) {
      msg && message.success(msg);
      return data;
    }
    // 未授权
    if (code === 401) {
      storage.clear();
    }
    message.error(msg);

    return Promise.reject(message);
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default api;
