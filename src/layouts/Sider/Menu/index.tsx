// import React, { memo, useMemo } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import * as Icon from '@ant-design/icons';
// import { Menu as AntMenu, MenuProps } from 'antd';

// import TranslatedText from '@/components/TranslatedText';
// import { AntdIconProps } from '@ant-design/icons/lib/components/AntdIcon';
// import { RouteType, RouteState } from '@/types/route';
// import { useDispatch, useSelector } from 'react-redux';
// import { addTab } from '@/redux/actions/appActions';
// import Link from '@/components/Link';
// type MenuItem = Required<MenuProps>['items'][number];

// const Menu: React.FC = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const dispatch = useDispatch();
//   const current = location.pathname;

//   const routes = useSelector((state: RouteState) => state.route.routes);
//   const handleClick = (key: string, label: string) => {
//     dispatch(addTab({ key, label }));
//   };

//   const generateItems = (routes: RouteType[]): MenuItem[] => {
//     const items: MenuItem[] = [];

//     for (const item of routes) {
//       const { icon, children, isExternalLink, isMenu, path, type, title } = item;
//       if (!isMenu) continue;
//       const TranslatedLabel = () => <TranslatedText>{title}</TranslatedText>;
//       const label = children?.length || type ? <TranslatedLabel /> : (
//         isExternalLink
//           ? <Link to={path} target="_blank" rel="noopener noreferrer"><TranslatedLabel /></Link>
//           : <Link to={path}><TranslatedLabel /></Link>
//       );
//       const IconComponent = (Icon as unknown as { [key: string]: React.ComponentType<AntdIconProps> })[icon] || null;

//       items.push({
//         key: path,
//         type,
//         icon: IconComponent && <IconComponent />,
//         children: children?.length ? generateItems(children) : undefined,
//         label,
//       });
//     }
//     return items;
//   };

//   const items = useMemo(() => generateItems(routes), [routes]);

//   return (
//     <AntMenu
//       mode="inline"
//       selectedKeys={[current]}
//       items={items}
//       // onClick={onClick}
//     />
//   );
// };

// export default memo(Menu);

import React, { memo, Suspense, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu as AntMenu, MenuProps } from 'antd';

import TranslatedText from '@/components/TranslatedText';
import { AntdIconProps } from '@ant-design/icons/lib/components/AntdIcon';
import { RouteType, RouteState } from '@/types/route';
import { useDispatch, useSelector } from 'react-redux';
import { addTab } from '@/redux/actions/appActions';
import Link from '@/components/Link';

type MenuItem = Required<MenuProps>['items'][number];

const loadIconComponent = async (icon: string): Promise<React.ComponentType<AntdIconProps>> => {
  const icons = await import('@ant-design/icons') as unknown as Record<string, React.ComponentType<AntdIconProps>>;

  return icons[icon];
};


const Menu: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const current = location.pathname;

  const routes = useSelector((state: RouteState) => state.route.routes);

  const [items, setItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    const generateItems = async (routes: RouteType[]): Promise<MenuItem[]> => {
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

        const IconComponent = icon ? await loadIconComponent(icon) : null;

        items.push({
          key: path,
          type,
          icon: IconComponent && <IconComponent />,
          children: children?.length ? await generateItems(children) : undefined,
          label,
        });
      }

      return items;
    };

    generateItems(routes).then((result) => setItems(result));
  }, [routes]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AntMenu
        mode="inline"
        selectedKeys={[current]}
        items={items}
      />
    </Suspense>
  );
};

export default memo(Menu);
