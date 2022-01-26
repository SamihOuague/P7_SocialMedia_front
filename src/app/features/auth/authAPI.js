export const fetchLogin = (data) => {
    return fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then((response) => {
        return response.json();
    }).catch((e) => {
        return {e};
    });
}

export const fetchRegister = (data) => {
    return fetch("http://localhost:3001/api/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then((response) => {
        return response.json();
    }).catch((e) => {
        return {e};
    });
}