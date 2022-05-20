import { createSlice } from "@reduxjs/toolkit";

export const colorsSlice = createSlice({
    name: "primaryColors",
    initialState: { value: [] },
    reducers: {
        addColor: (state,  action) => {
            state.value.push(action.payload);
        }
    }
});

export const { addColor } = colorsSlice.actions;
export default colorsSlice.reducer;