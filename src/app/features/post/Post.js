import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { postPost, getPosts } from "./postSlice";
import { logout } from "../auth/authSlice";

export default function Post() {
    let posts = useSelector((state) => state.post.posts);
    let loading = useSelector((state) => state.post.loading);
    let dispatch = useDispatch();
    let handleSub = (e) => {
        if (e.target.post.value)
            dispatch(postPost({content: e.target.post.value}));
        e.preventDefault();
    }
    let handleLogout = () => {
        dispatch(logout());
    }
    if (loading)
        dispatch(getPosts());
    return (
        <div className="post">
            <button onClick={() => handleLogout()}>Log out</button>
            <div className="post__container">
                <form className="post" onSubmit={(e) => handleSub(e)}>
                    <textarea name="post" placeholder="Ecrire un message ici"></textarea>
                    <button type="submit">Publier</button>
                </form>
                {posts.map((value, index) => (
                    <div key={index} className="post__container__post">
                        <div className="post__container__post__user">
                            <h3>@{value.username}</h3>
                        </div>
                        <div className="post__container__post__content">
                            {value.content}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}