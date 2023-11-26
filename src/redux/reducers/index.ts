import { combineReducers } from 'redux';
import routeReducer from './routeReducer';
import appReducer from './appReducer';

const reducers = combineReducers({
  route: routeReducer,
  app: appReducer,
});

export default reducers;
