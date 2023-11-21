import api from '../api';
import { ApiResponse } from '@/types/response';
import { RouteType } from '@/types/route';

const getRoutes = async () => {
  const { code, data, message }: ApiResponse<RouteType[]> = await api.get('/getRoutes');
  if (code !== 200) throw new Error(message || '获取菜单失败');
  return data || [];
};

const authService = {
  getRoutes,
};

export default authService;
