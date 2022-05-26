import { createSlice } from "@reduxjs/toolkit";

export const elementsSlice = createSlice({
    name: "selectedElements",
    initialState: { value: [] },
    reducers: {
        addElement: (state, action) => {
            if (!state.value.includes(action.payload)) {
                state.value.push(action.payload);
            }
        },

        deleteElement: (state, action) => {
            state.value = state.value.filter((element) => element !== action.payload);
        }
    }
});

export const { addElement, deleteElement } = elementsSlice.actions;

export default elementsSlice.reducer;