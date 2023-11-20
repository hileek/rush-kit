import React from 'react';
import { Breadcrumb as AntBreadcrumb } from 'antd';
import { useSelector } from 'react-redux';

const Breadcrumb = () => {
  const { routes } = useSelector((state: any) => ({
    routes: state.route.routes,
    loading: state.route.loading,
  }));
  return (
    <>
      <AntBreadcrumb items={routes} />
    </>
  )
  };

export default Breadcrumb;
