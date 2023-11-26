import { RouteType } from '@/types/route';
import { HOME_PATH } from '../constans';
const staticRoutes: Array<RouteType> = [
  {
    id: 'home',
    key: 'home',
    path: HOME_PATH,
    title: '首页',
    label: '首页',
    name: 'Home',
    icon: 'SettingOutlined',
    component: 'pages/Home',
    redirect: null,
    isMenu: true,
    isExternalLink: false,
    type: '',
    children: [],
  },
];

export default staticRoutes;
