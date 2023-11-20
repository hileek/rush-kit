import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import { Layout, theme, Button, Dropdown, MenuProps, Spin } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import Menu from './Menu';
import Breadcrumb from './Breadcrumb';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { AntdIconProps } from '@ant-design/icons/lib/components/AntdIcon';
import * as Icon from '@ant-design/icons';
import getScreenType from '@/utils/getScreenType';
import { RouteType } from '@/types/route';
import { ScreenType } from '@/types/app';


const Layouts = () => {
  const { Header, Content, Footer, Sider } = Layout;
  const { t } = useTranslation();
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
  const { routes } = useSelector((state: any) => ({
    routes: state.route.routes,
    loading: state.route.loading,
  }));

  // key为menu的key，value表示是否外链
  const externalLinkMap: any = {};
  type MenuItem = Required<MenuProps>['items'][number];
  const generateItems = (routes: RouteType[]): MenuItem[] => {
    const items: MenuItem[] = [];

    for (const item of routes) {
      let { icon, children, label, isExternalLink, isMenu, path, type } = item;
      if (!isMenu) continue;

      const IconComponent = (Icon as unknown as { [key: string]: React.ComponentType<AntdIconProps> })[icon] || null;

      if (isExternalLink) {
        externalLinkMap[path] = true;
        label = <a href={path} target="_blank" rel="noopener noreferrer">{t(label)}</a> as unknown as string;
      }

      items.push({
        key: path,
        icon: IconComponent && <IconComponent />,
        children: children?.length ? generateItems(children) : undefined,
        label: typeof label === 'string' ? t(label) : label,
        type,
      });
    }
    return items;
  }

  const items = generateItems(routes);

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
          console.log(collapsed, type);
          collapsed && setCollapsed(collapsed)
        }}
        collapsible
        collapsed={collapsed}
        trigger={null}
      >
        <div className="demo-logo-vertical" />
        <Menu items={items} externalLinkMap={externalLinkMap} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} className="flex ai-center">
          {/* <Dropdown menu={{ items }}> */}
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
          {/* </Dropdown> */}
          <Breadcrumb />
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, background: colorBgContainer }}><Outlet /></div>
        </Content>
        <Footer className="text-center">Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default Layouts;
