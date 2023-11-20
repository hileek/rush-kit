import { combineReducers } from 'redux';
import routeReducer from './routeReducer';

const reducers = combineReducers({
  route: routeReducer,
  // 可以添加其他模块的 reducer
});

export default reducers;
