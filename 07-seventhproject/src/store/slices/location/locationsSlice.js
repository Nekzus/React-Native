import { createSlice } from '@reduxjs/toolkit';

export const locationsSlice = createSlice({
  name: 'locations',
  initialState: {
    coords: {},
    address: null,
    history: [],
  },
  reducers: {
    coordsLocation: (state, action) => {
      state.coords = action.payload;
    },
    addressLocation: (state, action) => {
      state.address = action.payload;
    },
    historyLocations: (state, action) => {
      state.history = action.payload;
    },
  },
});

export const { coordsLocation, addressLocation, historyLocations } = locationsSlice.actions;
