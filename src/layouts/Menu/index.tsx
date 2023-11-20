import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu as AntMenu, MenuProps, } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const Menu = ({ externalLinkMap, items }: { externalLinkMap: any, items:MenuItem[] }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const current = location.pathname;

  const onClick: MenuProps['onClick'] = (e) => {
    if (externalLinkMap[e.key] || e.key === current) return;
    navigate(e.key);
  };
  
  return (
    <AntMenu
      theme="dark"
      mode="inline"
      selectedKeys={[current]}
      items={items}
      onClick={onClick}
    />
  )
};

export default Menu;
