import React from "react";
import { useSelector } from "react-redux";
import AuthRoutes from "./AuthRoutes";
import PostRoutes from "./PostRoutes";


export default function MainRoutes() {
    let token = useSelector((state) => state.auth.token);
    return(
        (token) ? <PostRoutes/> : <AuthRoutes/>
    );
}