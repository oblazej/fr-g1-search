import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

const SCHEMES_URL = "http://localhost:3001/colorschemes";

const initialState = {
    schemes: [],
    status: "idle",
    error: null
};

export const fetchSchemes = createAsyncThunk('schemes/fetchSchemes', async () => {
    const response = await Axios.get(SCHEMES_URL);
    return response.data;
});

const schemesSlice = createSlice({
    name: "schemes",
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(fetchSchemes.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchSchemes.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.schemes = state.schemes.concat(action.payload)
            })
            .addCase(fetchSchemes.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            
    }
});

export const selectAllSchemes = (state) => state.schemes;

export default schemesSlice.reducer;