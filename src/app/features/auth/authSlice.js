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
        token: localStorage.getItem("token"),
        user_id: null,
        isPending: false,
    },
    reducers: {
        logout: (state) => {
            state.token = null;
            state.user_id = null;
            localStorage.removeItem("token");
        },
        setToken: (state) => {
            state.token = (localStorage.getItem("token")) ? localStorage.getItem("token") : null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.isPending = true;
        });
        
        builder.addCase(login.fulfilled, (state, action) => {
            state.isPending = false;
            if (action.payload.token && action.payload.user_id) {
                state.user_id = action.payload.user_id;
                state.token = action.payload.token;
                localStorage.setItem("token", action.payload.token);
            }
        });
        
        builder.addCase(register.pending, (state) => {
            state.isPending = true;
        });

        builder.addCase(register.fulfilled, (state, action) => {
            state.isPending = false;
            if (action.payload.token && action.payload.user_id) {
                state.user_id = action.payload.user_id;
                state.token = action.payload.token;
                localStorage.setItem("token", action.payload.token);
            }
        });
    }
});

export const { logout, setToken } = postSlice.actions;

export default postSlice.reducer;