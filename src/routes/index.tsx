import React, { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';
import { Routes as RouterList, Route, Navigate } from 'react-router-dom';
import { Spin } from 'antd';
import AuthRoute from './AuthRoute';
// import routes from './config';
import Layouts from '../layouts';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';
import { HOME_PATH, LOGIN_PATH } from './constans';
import { RouteType } from '@/types/route';

const generateRoutes = (routes: RouteType[]): any => {
  return routes.map((route: RouteType) => {
    const Component = route.component ? lazy(() => import(`@/${route.component}`)) : null;
      return (
        <React.Fragment key={route.id}>
          {!!route.redirect && <Route path={route.path} element={<Navigate to={route.redirect} replace />} />}
          {!Component ? generateRoutes(route.children) : (
            <Route
              path={route.path}
              key={route.key}
              element={
                <Suspense fallback={
                  <Spin tip="Loading">
                    <div className="content" />
                  </Spin>
                }>
                  <AuthRoute path={route.path} title={route.title}>
                    <Component />
                  </AuthRoute>
                </Suspense>
              }
            >
              {route.children && !!route.children.length && generateRoutes(route.children)}
            </Route>
          )}
        </React.Fragment>
      );
  });
};

const Routes = () => {
  const routes = useSelector((state: any) => state.route.routes);

  return (
    <RouterList>
      <Route path="/" element={<AuthRoute path="/" title="首页"><Layouts /></AuthRoute>}>
        <Route path="/" key="home" element={<Navigate to={HOME_PATH} replace />} />
        {generateRoutes(routes)}
        {/* <RouteType path="/404" element={<NotFound />} /> */}
        <Route path="*" element={<AuthRoute path="*" title="没找到此页面"><NotFound /></AuthRoute>} />
      </Route>
      <Route path={LOGIN_PATH} element={<AuthRoute path={LOGIN_PATH} title="欢迎登录"><Login /></AuthRoute>} />
      {/* <RouteType path="*" element={<Navigate to="/404" />} /> */}
    </RouterList>
  );
};

export default Routes;
