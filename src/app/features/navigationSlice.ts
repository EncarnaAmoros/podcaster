import { createSlice } from '@reduxjs/toolkit';

export const navigationSlice = createSlice({
  name: 'loadingPage',
  initialState: {
    value: true,
  },
  reducers: {
    initNavigation: (state) => {
      state.value = true;
    },
    stopNavigation: (state) => {
      state.value = false;
    },
  },
});

export const { initNavigation, stopNavigation } = navigationSlice.actions;

export default navigationSlice.reducer;
