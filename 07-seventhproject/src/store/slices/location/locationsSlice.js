import { createSlice } from '@reduxjs/toolkit';

export const locationsSlice = createSlice({
  name: 'locations',
  initialState: {
    coords: {},
    address: null,
  },
  reducers: {
    coordsLocation: (state, action) => {
      state.coords = action.payload;
    },
    addressLocation: (state, action) => {
      state.address = action.payload;
    },
  },
});

export const { coordsLocation, addressLocation } = locationsSlice.actions;
