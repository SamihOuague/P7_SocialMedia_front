import React from "react";
import { Routes, Route } from "react-router-dom";
import Post from "../features/post/Post";

export default function PostRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Post/>} />
        </Routes>
    );
}