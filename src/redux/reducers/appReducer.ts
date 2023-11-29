import { PayloadAction } from '@reduxjs/toolkit';
import { SET_TABS, ADD_TAB, SET_COLLAPSED, SET_SCREEN_TYPE } from '@/redux/constants/type';
import storage from '@/utils/storage';
import getScreenType from '@/utils/getScreenType';
import type { Option, ScreenType, Action} from '@/types/app';

interface Init {
  tabs: Option[];
  screenType: ScreenType;
  collapsed: boolean;
}

const initScreeType = getScreenType();

const initialState: Init = {
  tabs: storage.getTabs(),
  screenType: initScreeType,
  collapsed: initScreeType !== 'large',
};

const appReducer = (state: Init = initialState, action: Action): Init => {
  switch (action.type) {
    case SET_TABS:
      return {
        ...state,
        tabs: action.payload,
      };
    case ADD_TAB:
      if (state.tabs.find(tab => tab.key === action.payload.key)) {
        return {
          ...state,
        };
      }
      return {
        ...state,
        tabs: [...state.tabs, action.payload],
      };
    case SET_SCREEN_TYPE:
      return {
        ...state,
        screenType: action.payload,
      };
    case SET_COLLAPSED:
      return {
        ...state,
        collapsed: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
