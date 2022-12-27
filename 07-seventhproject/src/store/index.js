import { configureStore } from '@reduxjs/toolkit';
import { locationsSlice } from './slices/location';
import { permissionsSlice } from './slices/permissions';

export const store = configureStore({
  reducer: {
    permissions: permissionsSlice.reducer,
    locations: locationsSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
