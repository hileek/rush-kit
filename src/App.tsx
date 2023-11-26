import React, { useEffect } from 'react';
import Routes from './routes';
import { useDispatch } from 'react-redux';
import { fetchRoutes } from './redux/actions/fetchRoutes'; 
import { isAuth } from '@/utils/storage';
import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const isAuthenticated = isAuth();
    if (isAuthenticated) {
      dispatch(fetchRoutes() as any);
    }
  }, [dispatch]);
  return <Routes />;
};

export default App;
