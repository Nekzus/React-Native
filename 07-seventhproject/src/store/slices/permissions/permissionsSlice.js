import { createSlice } from '@reduxjs/toolkit';

export const permissionsSlice = createSlice({
  name: 'permissions',
  initialState: {
    locationStatus: 'denied',
    cameraStatus: 'denied',
  },
  reducers: {
    akPermissionLocation: (state, action) => {
      state.locationStatus = action.payload;
    },
    ckPermissionLocation: (state, action) => {
      state.locationStatus = action.payload;
    },
  },
});

export const { akPermissionLocation, ckPermissionLocation } = permissionsSlice.actions;
