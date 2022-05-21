import { createSlice } from "@reduxjs/toolkit";

export const colorsSlice = createSlice({
    name: "selectedColors",
    initialState: { value: {primaryColors: [], secondaryColors: [], tertiaryColors: []} },
    reducers: {
        addColor: (state, action) => {
            if (!state.value[action.payload.colorOrder].includes(action.payload.color)) {
                state.value[action.payload.colorOrder].push(action.payload.color);
            } else {
                state.value[action.payload.colorOrder] = state.value[action.payload.colorOrder];
            }
        },

        deleteColor: (state, action) => {
            state.value[action.payload.colorOrder] = state.value[action.payload.colorOrder].filter((color) => color !== action.payload.color);
        }
    }
});

export const { addColor, deleteColor } = colorsSlice.actions;
export default colorsSlice.reducer;