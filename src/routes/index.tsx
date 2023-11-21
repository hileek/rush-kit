import React, { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';
import { Routes as RouterList, Route, Navigate } from 'react-router-dom';
import AuthRoute from './AuthRoute';
// import routes from './config';
import Layouts from '../layouts';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';
import { RouteType } from '@/types/route';
import { Spin } from 'antd';
import { LOGIN_PATH } from './constans';

const generateRoutes = (routes: RouteType[]): any => {
  return routes.map((route: RouteType) => {
    const Component = route.component ? lazy(() => import(`@/${route.component}`)) : null;
      return (
        <React.Fragment key={route.id}>
          {!!route.redirect && <Route path={route.path} element={<Navigate to={route.redirect} replace />} />}
          {!Component ? generateRoutes(route.children) : (
            <Route
              path={route.path}
              element={
                <Suspense fallback={
                  <Spin tip="Loading">
                    <div className="content" />
                  </Spin>
                }>
                  <AuthRoute path={route.path}><Component /></AuthRoute>
                  {/* <Component /> */}
                </Suspense>
              }
            >
              {route.children && !!route.children.length && generateRoutes(route.children)}
            </Route>
          )}
        </React.Fragment>
      );
  })
};

const Routes = () => {
  // const dispatch = useDispatch();
  // 使用 useSelector 获取存储在 Redux store 中的路由数据
  const { routes } = useSelector((state: any) => ({
    routes: state.route.routes,
    loading: state.route.loading,
  }));
  return (
    <RouterList>
      <Route path="/" element={<AuthRoute path="/"><Layouts /></AuthRoute>}>
        <Route path="/" element={<Navigate to='/home' replace />} />
        {generateRoutes(routes)}
        {/* <RouteType path="/404" element={<NotFound />} /> */}
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path={LOGIN_PATH} element={<AuthRoute path={LOGIN_PATH}><Login /></AuthRoute>} />
      {/* <RouteType path="*" element={<Navigate to="/404" />} /> */}
    </RouterList>
  );
};

export default Routes;
