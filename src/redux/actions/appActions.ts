import { Option } from '@/types/app';
import { SET_TABS, ADD_TAB } from '../constants/type';

export const setTabs = (tabs: Option[]) => {
  return {
    type: SET_TABS,
    payload: tabs,
  };
};

export const addTab = (tab: Option) => {
  return {
    type: ADD_TAB,
    payload: tab,
  };
};
