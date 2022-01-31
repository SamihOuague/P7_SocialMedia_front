import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAddPost, fetchGetPosts } from "./postAPI";

export const postPost = createAsyncThunk(
    "post/post",
    async (data) => {
        let response = await fetchAddPost(data, localStorage.getItem("token"));
        return response;
    }
);

export const getPosts = createAsyncThunk(
    "post/getPost",
    async () => {
        let response = await fetchGetPosts(localStorage.getItem("token"));
        return response;
    }
);

export const postSlice = createSlice({
    name: "post",
    initialState: {
        posts: [],
        loading: true
    },
    extraReducers: (builder) => {
        builder.addCase(postPost.fulfilled, (state, action) => {
            if (action.payload.content)
                state.posts.push(action.payload);
        });

        builder.addCase(getPosts.fulfilled, (state, action) => {
            console.log(action.payload);
            if (action.payload) {
                state.posts = action.payload;
                state.loading = false;
            }
        });
    }
});

export default postSlice.reducer;