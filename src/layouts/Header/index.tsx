import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Layout, theme, Button, Avatar } from 'antd';
import type { MenuProps } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  TranslationOutlined,
} from '@ant-design/icons';

import { setCollapsed } from '@/redux/actions/appActions';
import Breadcrumb from './Breadcrumb';
import Tabs from './Tabs';
import TranslatedButton from './TranslatedButton';

const Right = styled.div`
  padding-right: 10px;
`;

const Header = () => {
  const { collapsed } = useSelector((state: any) => ({
    collapsed: state.app.collapsed,
  }));

  const dispatch = useDispatch();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item
        </a>
      ),
    },
  ];

  return (
    <>
      <Layout.Header style={{ padding: 0, background: colorBgContainer }} className="flex ai-center jc-between">
        <div className="flex ai-center">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => dispatch(setCollapsed(!collapsed))}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <Breadcrumb />
        </div>
        <div className="flex-center pr-10">
          <TranslatedButton />
          <Avatar style={{ verticalAlign: 'middle' }} size="large" gap={1}>姚海雄</Avatar>
        </div>
      </Layout.Header>
      {/* <Tabs /> */}
    </>
  );
};

export default Header;
