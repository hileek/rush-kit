import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';
import thunkMiddleware from 'redux-thunk';

const store = configureStore({
  reducer: reducers,
  middleware: [thunkMiddleware], // 启用 Redux Thunk 中间件
});

export default store;
