import React from 'react';
import { Outlet } from 'react-router';
import { Layout, theme } from 'antd';
import Sider from './Sider';
import Header from './Header';

const Layouts: React.FC = () => {
  const { Content, Footer } = Layout;

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="h-100">
      <Sider />
      <Layout>
        <Header />
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, background: colorBgContainer }}><Outlet /></div>
        </Content>
        <Footer className="text-center">Rush Kit ©2023 Created by PEEK</Footer>
      </Layout>
    </Layout>
  );
};

export default Layouts;
