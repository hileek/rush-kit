import api from '../api';
import { ApiResponse } from '@/types/response';
import { RouteType } from '@/types/route';

const getRoutes = async () => {
  const data: RouteType[] = await api.get('/getRoutes');
  return data;
};

const authService = {
  getRoutes,
};

export default authService;
