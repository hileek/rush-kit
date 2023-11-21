import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { isAuth } from '../../utils/storage';
import { LOGIN_PATH } from '../constans';

const PrivateRoute = ({ children, path }: { children: ReactNode, path: string }) => {
  const isAuthenticated: boolean = isAuth(); // 是否认证
  console.log(isAuthenticated, 123212332)
  if (path !== LOGIN_PATH) return isAuthenticated ? <>{children}</> : <Navigate to={LOGIN_PATH} />;
  // 用户访问登录页面
  return isAuthenticated ? <Navigate to="/home" /> : <>{children}</>;
};

export default PrivateRoute;