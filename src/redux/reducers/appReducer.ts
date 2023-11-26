import { PayloadAction } from '@reduxjs/toolkit';
import { SET_TABS, ADD_TAB } from '@/redux/constants/type';
import storage from '@/utils/storage';
import type { Option } from '@/types/app';

interface Init {
  tabs: Option[]
}

const initialState: Init = {
  tabs: storage.getTabs(),
};

const appReducer = (state = initialState, action: PayloadAction<Option>) => {
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
    default:
      return state;
  }
};

export default appReducer;
