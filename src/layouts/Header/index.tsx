import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Layout, theme, Button, Avatar, Dropdown } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';

import { setCollapsed } from '@/redux/actions/appActions';
import Breadcrumb from './Breadcrumb';
import Tabs from './Tabs';
import TranslatedButton from './TranslatedButton';

const Right = styled.div`
  display: flex;
  align-items: center;
  >div {
    margin-right: 20px;
  }
`;

const Header: React.FC = () => {
  const { collapsed } = useSelector((state: any) => ({
    collapsed: state.app.collapsed,
  }));

  const dispatch = useDispatch();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

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
        <Right>
          <TranslatedButton />
          <div>
            <Dropdown menu={{ items: [{ key: '1', label: '退出登录' }] }}>
              <Avatar style={{ verticalAlign: 'middle' }} gap={2}>姚海雄</Avatar>
            </Dropdown>
          </div>
        </Right>
      </Layout.Header>
      {/* <Tabs /> */}
    </>
  );
};

export default Header;
