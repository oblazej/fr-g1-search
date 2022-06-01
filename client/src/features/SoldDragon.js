import { createSlice } from "@reduxjs/toolkit";

export const dragonsSlice = createSlice({
    name: "soldDragon",
    initialState: { value: {
        id: "",
        primaryColor: "",
        secondaryColor: "",
        tertiaryColor: "",
        element: "",
        gender: "",
        price: "",
        seller: "",
        img: ""
    } },
    reducers: {
        addValue: (state, action) => {
                state.value[action.payload.type] = action.payload.val;
            }
        
    }
});

export const { addValue } = dragonsSlice.actions;

export default dragonsSlice.reducer;