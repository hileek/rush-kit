import React, { useEffect } from 'react';
import { Layout } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import Menu from './Menu';
import { setCollapsed } from '@/redux/actions/appActions';
import useScreenType from '@/hooks/useScreenType';

const Logo = styled.div`
  width: 100%;
  height: 64px;
  background-image: url('/assets/image/logo.svg');
`;

const Sider = () => {
  const dispatch = useDispatch();
  const screenType =useScreenType();

  const { collapsed } = useSelector((state: any) => ({
    collapsed: state.app.collapsed,
  }));

  const collapsedWidthMap: Record<string, 0 | 80> = {
    small: 0,
    middle: 80,
    large: 80,
    '': 80,
  };

  useEffect(() => {
    if (screenType === 'large') {
      dispatch(setCollapsed(false));
    } else {
      dispatch(setCollapsed(true));
    }
  }, [dispatch, screenType]);

  return (
    <Layout.Sider
      breakpoint="md"
      collapsedWidth={collapsedWidthMap[screenType]}
      onCollapse={(collapsed) => {
        collapsed && dispatch(setCollapsed(collapsed));
      }}
      collapsible
      collapsed={collapsed}
      trigger={null}
    >
      <Logo>
      </Logo>
      <Menu />
    </Layout.Sider>
  );
};

export default Sider;
