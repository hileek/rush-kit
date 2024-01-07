import React, { memo, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as Icon from '@ant-design/icons';
import { Menu as AntMenu, MenuProps } from 'antd';

import TranslatedText from '@/components/TranslatedText';
import { AntdIconProps } from '@ant-design/icons/lib/components/AntdIcon';
import { RouteType, RouteState } from '@/types/route';
import { useDispatch, useSelector } from 'react-redux';
import { addTab } from '@/redux/actions/appActions';
import Link from '@/components/Link';
type MenuItem = Required<MenuProps>['items'][number];

const Menu: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const current = location.pathname;

  const routes = useSelector((state: RouteState) => state.route.routes);
  const handleClick = (key: string, label: string) => {
    dispatch(addTab({ key, label }));
  };

  const generateItems = (routes: RouteType[]): MenuItem[] => {
    const items: MenuItem[] = [];

    for (const item of routes) {
      const { icon, children, isExternalLink, isMenu, path, type, title } = item;
      if (!isMenu) continue;
      const TranslatedLabel = () => <TranslatedText>{title}</TranslatedText>;
      const label = children?.length || type ? <TranslatedLabel /> : (
        isExternalLink
          ? <Link to={path} target="_blank" rel="noopener noreferrer"><TranslatedLabel /></Link>
          : <Link to={path}><TranslatedLabel /></Link>
      );
      const IconComponent = (Icon as unknown as { [key: string]: React.ComponentType<AntdIconProps> })[icon] || null;

      items.push({
        key: path,
        type,
        icon: IconComponent && <IconComponent />,
        children: children?.length ? generateItems(children) : undefined,
        label,
      });
    }
    return items;
  };

  const items = useMemo(() => generateItems(routes), [routes]);

  return (
    <AntMenu
      mode="inline"
      selectedKeys={[current]}
      items={items}
      // onClick={onClick}
    />
  );
};

export default memo(Menu);
