import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from 'src/app/features/navigationSlice';

export default configureStore({
  reducer: {
    loadingPage: navigationReducer,
  },
});
