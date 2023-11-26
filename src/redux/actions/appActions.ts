import { Option, Action } from '@/types/app';
import { SET_TABS, ADD_TAB, SET_SCREEN_TYPE, SET_COLLAPSED } from '../constants/type';

export const setTabs = (tabs: Option[]): Action<Option[]> => {
  return {
    type: SET_TABS,
    payload: tabs,
  };
};

export const addTab = (tab: Option): Action<Option> => {
  return {
    type: ADD_TAB,
    payload: tab,
  };
};

export const setScreenType = (screenType: string): Action<string> => {
  return {
    type: SET_SCREEN_TYPE,
    payload: screenType,
  };
}; 
export const setCollapsed = (isCollapsed: boolean): Action<boolean> => {
  return {
    type: SET_COLLAPSED,
    payload: isCollapsed,
  };
};
