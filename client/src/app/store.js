import { configureStore } from '@reduxjs/toolkit';
import colorsReducer from "../features/SelectedColors";
import elementsReducer from "../features/SelectedElements";
import dragonReducer from "../features/SoldDragon";
import dragonsReducer from "../features/Dragons";

export const store = configureStore({
  reducer: {
    selectedColors: colorsReducer,
    selectedElements: elementsReducer,
    soldDragon: dragonReducer,
    dragons: dragonsReducer
  },
});
