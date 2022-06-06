import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

const DRAGONS_URL = "http://localhost:3001/dragons";

const initialState = {
    dragons: [],
    status: "idle",
    error: null
};

export const fetchDragons = createAsyncThunk('dragons/fetchDragons', async () => {
    const response = await Axios.get(DRAGONS_URL);
    return response.data;
});

const dragonsSlice = createSlice({
    name: "dragons",
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(fetchDragons.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchDragons.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.dragons = state.dragons.concat(action.payload)
            })
            .addCase(fetchDragons.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            
    }
});

export const selectAllDragons = (state) => state.dragons;
// export const getDragonsStatus = (state) => state.dragons.status;
// export const getDragonsError = (state) => state.dragons.error;

export default dragonsSlice.reducer;