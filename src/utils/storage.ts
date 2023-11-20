import { TOKEN_NAME } from './constants';

const setItem = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getItem = (key: string) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

const removeItem = (key: string) => {
  localStorage.removeItem(key);
};

// export const isAuth = () => !!getItem(TOKEN_NAME);

const getToken = () => getItem(TOKEN_NAME);
const setToken = (value: any) => setItem(TOKEN_NAME, value);
const removeToken = () => removeItem(TOKEN_NAME);

const clear = () => {
  localStorage.clear();
};

export const isAuth = () => !!getToken();

const storage = {
  isAuth,
  getToken,
  setToken,
  removeToken,
  clear,
};

export default storage;
