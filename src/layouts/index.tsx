import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import { Layout, theme, Button } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import Menu from './Menu';
import Breadcrumb from './Header/Breadcrumb';
import Tabs from './Header/Tabs';
import getScreenType from '@/utils/getScreenType';
import { ScreenType } from '@/types/app';
import styled from 'styled-components';

const Logo = styled.div`
  width: 100%;
  height: 64px;
  background-image: url('/assets/image/logo.svg');
`;

const Layouts = () => {
  const { Header, Content, Footer, Sider } = Layout;
  const collapsedWidthMap = {
    small: 0,
    middle: 80,
    large: 80,
    '': 80,
  };
  const [screenType, setScreenType] = useState<ScreenType>(getScreenType());
  const [collapsed, setCollapsed] = useState<boolean>(screenType !== 'large');

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    if (screenType === 'large') {
      setCollapsed(false);
    } else {
      setCollapsed(true);
    }
  }, [screenType]);

  useEffect(() => {
    const handleResize = () => {
      requestAnimationFrame(() => {
        setScreenType(getScreenType());
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Layout className="h-100">
      <Sider
        breakpoint="md"
        collapsedWidth={collapsedWidthMap[screenType]}
        onCollapse={(collapsed, type) => {
          collapsed && setCollapsed(collapsed);
        }}
        collapsible
        collapsed={collapsed}
        trigger={null}
      >
        <Logo>
        </Logo>
        <Menu />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} className="flex ai-center">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <Breadcrumb />
        </Header>
        {/* <Tabs /> */}
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, background: colorBgContainer }}><Outlet /></div>
        </Content>
        <Footer className="text-center">Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default Layouts;
