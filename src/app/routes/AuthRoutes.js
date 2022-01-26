import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthLogin, AuthRegister } from "../features/auth/Auth";

export default function AuthRoutes() {
    return(
        <Routes>
            <Route path="/" element={<AuthLogin/>}/>
            <Route path="/login" element={<AuthLogin/>}/>
            <Route path="/register" element={<AuthRegister/>}/>
        </Routes>
    );
}