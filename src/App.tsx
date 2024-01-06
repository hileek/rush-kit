import React, { useEffect } from 'react';
import Routes from './routes';
import { useDispatch } from 'react-redux';
import { fetchRoutes } from './redux/actions/fetchRoutes'; 
import { isAuth } from '@/utils/storage';
import './App.css';
import { ConfigProvider } from 'antd';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';
import enUS from 'antd/locale/en_US';
import zhCN from 'antd/locale/zh_CN';
import 'dayjs/locale/zh-cn';

const App = () => {
  const dispatch = useDispatch();
  // const { i18n } = useTranslation();
  // const locale = i18n.language === 'zh' ? zhCN : enUS;
  // if (i18n.language === 'en') {
  //   dayjs.locale('en');
  // } else {
  //   dayjs.locale('zh-cn');
  // }
  console.log('app rerender');

  useEffect(() => {
    const isAuthenticated = isAuth();
    console.log('app rerender');
    if (isAuthenticated) {
      dispatch(fetchRoutes() as any);
    }
  }, [dispatch]);

  return (
    // <ConfigProvider locale={locale}>
    <Routes />
    // </ConfigProvider>
  );
};

export default App;
