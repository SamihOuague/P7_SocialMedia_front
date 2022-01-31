export const fetchAddPost = (data, token) => {
    return fetch("http://localhost:3001/api/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Barear " + token
        },
        body: JSON.stringify(data),
    }).then((res) => {
        return res.json();
    }).catch((e) => {
        return {e};
    });
}

export const fetchGetPosts = (token) => {
    return fetch("http://localhost:3001/api/post", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Barear " + token
        }
    }).then((res) => {
        return res.json();
    }).catch((e) => {
        return {e};
    });
}