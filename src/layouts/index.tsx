import React from 'react';
import { Outlet } from 'react-router';
import { Layout, theme } from 'antd';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { useLocation, useOutlet } from 'react-router-dom';

import Sider from './Sider';
import Header from './Header';
import styled from 'styled-components';

const Content = styled(Layout.Content)`
  height: calc(100vh - 84px);
  margin: 14px 16px 0;
  overflow: scroll;
`;

const Layouts: React.FC = () => {
  const location = useLocation();
  const currentOutlet = useOutlet();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="h-100">
      <Sider />
      <Layout style={{ overflow: 'auto' }}>
        <Header />
        {/* <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            timeout={300}
            classNames="page"
            unmountOnExit
          >
            {() => (
              <Content>
                <div style={{ padding: 24, background: colorBgContainer }}>
                  <>{currentOutlet}</>
                </div>
                <Layout.Footer className="text-center">Rush Kit ©2023 Created by PEEK</Layout.Footer>
              </Content>
            )}
          </CSSTransition>
        </SwitchTransition> */}
        <Content>
          <div style={{ padding: 24, background: colorBgContainer }}>
            <Outlet />
          </div>
          <Layout.Footer className="text-center">Rush Kit ©2023 Created by PEEK</Layout.Footer>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Layouts;
