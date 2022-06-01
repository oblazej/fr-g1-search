import { configureStore } from '@reduxjs/toolkit';
import colorsReducer from "../features/SelectedColors";
import elementsReducer from "../features/SelectedElements";
import dragonReducer from "../features/SoldDragon";

export const store = configureStore({
  reducer: {
    selectedColors: colorsReducer,
    selectedElements: elementsReducer,
    soldDragon: dragonReducer
  },
});
