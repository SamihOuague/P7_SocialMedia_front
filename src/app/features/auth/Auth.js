import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "./authSlice";

export function AuthLogin () {
    const dispatch = useDispatch();
    const isPending = useSelector((state) => state.auth.isPending);
    const handleSub = (e) => {;
        let data = {
            username: e.target.username.value,
            password: e.target.password.value,
        }
        dispatch(login(data));
        e.preventDefault();
    }

    return (
        (!isPending) ?
        <div className="d-flex center">
            <form className="form d-flex flex-column" onSubmit={handleSub}>
                <input className="form--input" type="text" name="username" placeholder="Username"/>
                <input className="form--input" type="password" name="password" placeholder="Password"/>
                <input className="btn" type="submit" value="Login"/>
            </form>
        </div> :
        <div className="d-flex center">
            <h1>Loading...</h1>
        </div>
    );
}

export function AuthRegister () {
    const dispatch = useDispatch();
    const isPending = useSelector((state) => state.auth.isPending);
    const handleSub = (e) => {;
        let data = {
            username: e.target.username.value,
            password: e.target.password.value,
            email: e.target.email.value,
        }
        dispatch(register(data));
        e.preventDefault();
    }

    return(
        (!isPending) ?
            <div className="d-flex center">
                <form className="form d-flex flex-column" onSubmit={handleSub}>
                    <input className="form--input" type="email" name="email" placeholder="Email"/>
                    <input className="form--input" type="text" name="username" placeholder="Username"/>
                    <input className="form--input" type="password" name="password" placeholder="Password"/>
                    <input className="btn" type="submit" value="Register"/>
                </form>
            </div> :
            <div className="d-flex center">
                <h1>Loading...</h1>
            </div>
    );
}