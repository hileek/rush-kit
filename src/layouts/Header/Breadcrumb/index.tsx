import React, { useCallback, useEffect, useState } from 'react';
import { Breadcrumb as AntBreadcrumb } from 'antd';
import { useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import type { RouteType, BreadcrumbItem, RouteState } from '@/types/route';
import type { MenuItem } from '@/types/app';
import { HOME_PATH } from '@/routes/constans';

const Breadcrumb: React.FC = () => {
  const location = useLocation();

  const { routes } = useSelector((state: RouteState) => ({
    routes: state.route.routes,
    loading: state.route.loading,
  }));

  const [items, setItems] = useState<RouteType[]>([]);

  // 生成面包屑数组
  const findBreadcrumbItems = (routes: RouteType[], currentPath: string): BreadcrumbItem[] => {
    const result: BreadcrumbItem[] = [{ title: '首页', path: HOME_PATH }] as BreadcrumbItem[];

    const getMenuItems = (routes: RouteType[]): MenuItem[] => {
      const menuItems = routes.map(route => ({
        key: route.id,
        label: <Link to={route.path}>{route.title}</Link>,
      }));
      return menuItems;
    };
  
    const traverse = (route: RouteType, parentArray: BreadcrumbItem[] = []): void => {
      const hasChildren: boolean = !!route.children && !!route.children.length;
      // 下拉菜单
      const item: BreadcrumbItem = {
        ...route,
        title: route.title,
        menu: hasChildren ? { items: getMenuItems(route.children) } : undefined,
      };

      const currentArray = [...parentArray, item];
  
      if (currentPath === item.path) {
        result.push(...currentArray);
      }
  
      if (item.children) {
        const matchingChild = item.children.find(child => currentPath.startsWith(child.path));
        if (matchingChild) {
          traverse(matchingChild, currentArray);
        }
      }
    };
  
    for (const route of routes) {
      // 动态生成breadcrumb list，排除home
      if (route.path == HOME_PATH) continue;
      traverse(route);
    }
  
    return result;
  };

  const generateItems = useCallback(() => {
    const newPath = location.pathname;
    setItems(findBreadcrumbItems(routes, newPath) as RouteType[]);
  }, [location.pathname, routes]);

  const itemRender = (item: BreadcrumbItem, _: unknown, items: BreadcrumbItem[], paths: string[]) => {
    const last = items.indexOf(item) === items.length - 1;
    console.log(paths,paths[paths.length - 1]);
    return last ? <span>{item.title}</span> : <Link to={paths[paths.length - 1]}>{item.title}</Link>;
  };

  useEffect(() => {
    generateItems();
  }, [generateItems, location]);

  return (
    <>
      <AntBreadcrumb itemRender={itemRender as any} items={items} />
    </>
  );
};

export default Breadcrumb;
