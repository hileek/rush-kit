import Cookies from 'js-cookie';
import { TOKEN_NAME, TABS_NAME, LANGUAGE_NAME } from './constants';
import type { Option, Language } from '@/types/app';

const getItem = (key: string, initialState: unknown = null) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : initialState;
};

const setItem = (key: string, value: unknown) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const removeItem = (key: string) => {
  localStorage.removeItem(key);
};

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

const getLocale = (): Language => getItem(LANGUAGE_NAME, 'zh');
const setLocale = (value: Language) => setItem(LANGUAGE_NAME, value);
const removeLanguage = () => removeItem(LANGUAGE_NAME);

const clear = () => {
  localStorage.clear();
  removeToken();
};

export const isAuth = () => !!getToken();

export default {
  clear,
  isAuth,
  getToken,
  setToken,
  removeToken,
  getTabs,
  setTabs,
  removeTabs,
  getLocale,
  setLocale,
  removeLanguage,
};
