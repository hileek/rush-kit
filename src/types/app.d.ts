import type { MenuProps } from 'antd';
export type ScreenType = 'small' | 'middle' | 'large';
export type Option = {
  key: string | number;
  label: string | ReactDom;
};
export type MenuItem = Required<MenuProps>['items'][number];

export interface Action<T = any> {
  type: string;
  payload: T
}

export type Language = 'zh' | 'en';
