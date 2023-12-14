import { SET_USER } from '../constants/type';

export const setUser = (user: UserInfo) => ({
  type: SET_USER,
  payload: user,
});
