import { createSlice } from "@reduxjs/toolkit";

export const colorsSlice = createSlice({
    name: "selectedColors",
    initialState: { value: {
                            primaryColors: [], 
                            secondaryColors: [], 
                            tertiaryColors: [],
                            primaryRanges: [],
                            secondaryRanges: [],
                            tertiaryRanges: []
                        } },
    reducers: {
        addColor: (state, action) => {
            if (!state.value[action.payload.colorOrder].includes(action.payload.color)) {
                state.value[action.payload.colorOrder].push(action.payload.color);
            }
            
        },

        deleteColor: (state, action) => {
            state.value[action.payload.colorOrder] = state.value[action.payload.colorOrder].filter((color) => color !== action.payload.color);
        },

        resetColors: (state, action) => {
            state.value =  {
                primaryColors: [], 
                secondaryColors: [], 
                tertiaryColors: [],
                primaryRanges: [],
                secondaryRanges: [],
                tertiaryRanges: []
            }
        }
    }
});

export const { addColor, deleteColor, resetColors } = colorsSlice.actions;
export default colorsSlice.reducer;