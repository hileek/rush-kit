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

  const externalLinkMap: Record<string, boolean> = {};
  const generateItems = (routes: RouteType[]): MenuItem[] => {
    const items: MenuItem[] = [];
    console.log('gggg');
    for (const item of routes) {
      const { icon, children, isExternalLink, isMenu, path, type } = item;
      let label = item.title;
      if (!isMenu) continue;

      const IconComponent = (Icon as unknown as { [key: string]: React.ComponentType<AntdIconProps> })[icon] || null;

      if (isExternalLink) {
        externalLinkMap[path] = true;
        label = <Link to={path} target="_blank" rel="noopener noreferrer"><TranslatedText>{label}</TranslatedText></Link> as unknown as string;
      }

      items.push({
        key: path,
        icon: IconComponent && <IconComponent />,
        children: children?.length ? generateItems(children) : undefined,
        label: typeof label === 'string' ? <Link to={path}><TranslatedText>{label}</TranslatedText></Link> : label,
        type,
      });
    }
    return items;
  };

  const items = useMemo(() => generateItems(routes), [routes]);

  const onClick: MenuProps['onClick'] = (e) => {
    if (externalLinkMap[e.key] || e.key === current) return;
    navigate(e.key);
    dispatch(addTab({ key: e.key, label: '迭代' }));
  };
  
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
