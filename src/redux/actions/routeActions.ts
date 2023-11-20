import { SET_ROUTES } from "../constants/type";
import { RouteType } from '@/types/route';

export const setRoutes = (routes: RouteType[]) => {
  return {
    type: SET_ROUTES,
    payload: routes,
  };
};
