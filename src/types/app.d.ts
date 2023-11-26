import type { MenuProps } from 'antd';
export type ScreenType = 'small' | 'middle' | 'large';
export type Option = {
  key: string | number;
  label: string | ReactDom;
};
export type MenuItem = Required<MenuProps>['items'][number];

