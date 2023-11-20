import { RouteType } from "@/types/route";
const staticRoutes: Array<RouteType> = [
  {
    id: 'home',
    key: 'home',
    path: '/home',
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
