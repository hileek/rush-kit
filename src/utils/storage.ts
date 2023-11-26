import Cookies from 'js-cookie';
import { TOKEN_NAME, TABS_NAME } from './constants';
import type { Option } from '@/types/app';

const getItem = (key: string, initialState: any = null) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : initialState;
};

const setItem = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const removeItem = (key: string) => {
  localStorage.removeItem(key);
};

// export const isAuth = () => !!getItem(TOKEN_NAME);

const getToken = () => Cookies.get(TOKEN_NAME);
const setToken = (value: string, expires?: number) => {
  const nowTime: number = new Date().getTime();
  if (expires) {
    const expiresTime: Date = new Date(nowTime + expires * 1000);
    Cookies.set(TOKEN_NAME, value, { expires: expiresTime });
    return;
  }
  Cookies.set(TOKEN_NAME, value);
};
const removeToken = () => {
  Cookies.remove(TOKEN_NAME);
};

const getTabs = () => getItem(TABS_NAME, []);
const setTabs = (value: Option[]) => setItem(TABS_NAME, value);
const removeTabs = () => removeItem(TABS_NAME);

const clear = () => {
  localStorage.clear();
};

export const isAuth = () => !!getToken();

const storage = {
  isAuth,
  getToken,
  setToken,
  getTabs,
  setTabs,
  removeTabs,
  removeToken,
  clear,
};

export default storage;
