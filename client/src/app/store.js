import { configureStore } from '@reduxjs/toolkit';
import colorsReducer from "../features/SelectedColors";

export const store = configureStore({
  reducer: {
    primaryColors: colorsReducer
  },
});
