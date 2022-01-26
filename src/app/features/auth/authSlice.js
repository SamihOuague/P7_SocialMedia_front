import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchLogin, fetchRegister } from "./authAPI";

export const login = createAsyncThunk(
    "auth/login", 
    async (data) => {
        let response = await fetchLogin(data);
        return response;
    }
);


export const register = createAsyncThunk(
    "auth/register", 
    async (data) => {
        let response = await fetchRegister(data);
        return response;
    }
);

export const postSlice = createSlice({
    name: "auth",
    initialState: {
        token: null,
        user_id: null,
        isPending: false,
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.isPending = true;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.isPending = false;
            console.log(action.payload);
        });
        
        builder.addCase(register.pending, (state) => {
            state.isPending = true;
        });
        builder.addCase(register.fulfilled, (state, action) => {
            state.isPending = false;
            console.log(action.payload);
        });
    }
});

export default postSlice.reducer;