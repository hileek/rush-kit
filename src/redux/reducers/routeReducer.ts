import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchRoutes } from '../actions/fetchRoutes';
import { RouteType, RoutesState } from '@/types/route'; 
import staticRoutes from '@/routes/staticRoutes';

const initialState: RoutesState = {
  routes: [],
  loading: false,
  error: null,
};

const routesSlice = createSlice({
  name: 'routes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRoutes.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchRoutes.fulfilled, (state, action: PayloadAction<RouteType[]>) => {
      state.routes = [...staticRoutes, ...action.payload];
      state.loading = false;
    });
    builder.addCase(fetchRoutes.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default routesSlice.reducer;
