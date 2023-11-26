import type { Option, MenuItem } from './app';

export interface RouteType {
  path: string;
  component: string | null;
  redirect: string | null;
  title: string;
  label: string;
  icon: string;
  id: number | string;
  key: number | string;
  isMenu: boolean;
  isExternalLink: boolean;
  name: string;
  children: RouteType[];
  type: any;
}

export interface RoutesState {
  routes: RouteType[];
  loading: boolean;
  error: string | null;
}

export interface BreadcrumbItem extends RouteType {
  title?: ReactDOM;
  menu?: {
    items: MenuItem[]
  };
}

export interface RouteState {
  route: {
    routes: RouteType[];
    loading: boolean;
  };
}
