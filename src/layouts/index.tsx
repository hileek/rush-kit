import React, { useRef } from 'react';
import { Outlet } from 'react-router';
import { Layout, theme } from 'antd';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useLocation } from 'react-router-dom';

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
  const contentRef = useRef(null);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="h-100">
      <Sider />
      <Layout style={{overflow: 'auto'}}>
        <Header />
        <Content>
          <div style={{ padding: 24, background: colorBgContainer }}>
          {/* <TransitionGroup>
              <CSSTransition
                key={location.pathname}
                classNames="fade"
                timeout={3000}
                nodeRef={contentRef}
              >
                <Outlet />
              </CSSTransition>
            </TransitionGroup> */}
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
