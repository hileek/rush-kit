import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu as AntMenu, MenuProps, } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

interface Props {
  externalLinkMap: Record<string, string>;
  items: MenuItem[];
}


const Menu: React.FC<Props> = ({ externalLinkMap, items }) => {
  console.log(externalLinkMap, items)
  const navigate = useNavigate();
  const location = useLocation();
  const current = location.pathname;
  console.log('菜单')
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
