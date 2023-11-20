import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { isAuth } from '../../utils/storage';

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const isAuthenticated: boolean = isAuth(); // 是否认证
  console.log(isAuthenticated)
  console.log(123212332)
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

export default PrivateRoute;
