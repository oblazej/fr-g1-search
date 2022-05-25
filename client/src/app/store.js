import { configureStore } from '@reduxjs/toolkit';
import colorsReducer from "../features/SelectedColors";
import elementsReducer from "../features/SelectedElements";

export const store = configureStore({
  reducer: {
    selectedColors: colorsReducer,
    selectedElements: elementsReducer
  },
});
