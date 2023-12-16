import React from 'react';
import { Outlet } from 'react-router';
import { Layout, theme } from 'antd';
import Sider from './Sider';
import Header from './Header';
import styled from 'styled-components';

const Content = styled(Layout.Content)`
  height: calc(100vh - 84px);
  margin: 14px 16px 0;
  overflow: scroll;
`;

const Layouts: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const test = () => {
    console.log('Layout rerender');
    return <></>;
  };
  return (
    <Layout className="h-100">
      <Sider />
      <Layout style={{overflow: 'auto'}}>
        <Header />
        <Content>
          <div style={{ padding: 24, background: colorBgContainer }}>
            {test()}
            <Outlet />
          </div>
          <Layout.Footer className="text-center">Rush Kit ©2023 Created by PEEK</Layout.Footer>
        </Content>
        {/* <Footer className="text-center">Rush Kit ©2023 Created by PEEK</Footer> */}
      </Layout>
    </Layout>
  );
};

export default Layouts;
