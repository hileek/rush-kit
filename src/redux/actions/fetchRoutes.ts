import { createAsyncThunk } from '@reduxjs/toolkit';
import authService from '@/services/authService';
import { RouteType } from '@/types/route';

export const fetchRoutes = createAsyncThunk<RouteType[], void>(
  'routes/fetchRoutes',
  async (_, { rejectWithValue }) => {
    try {
      const menus = await authService.getRoutes();
      return menus;
    } catch (error: any) {
      return rejectWithValue(error.response?.data);
    }
  }
);
