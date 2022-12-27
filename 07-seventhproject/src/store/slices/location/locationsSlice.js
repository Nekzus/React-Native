import { createSlice } from '@reduxjs/toolkit';

export const locationsSlice = createSlice({
  name: 'locations',
  initialState: {
    coords: {},
  },
  reducers: {
    coordsLocation: (state, action) => {
      state.coords = action.payload;
    },
  },
});

export const { coordsLocation } = locationsSlice.actions;
