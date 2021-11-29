const url = 'http://localhost:5000/auth';

export const login = async (data) => {
    
    let res = await fetch(`${url}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    return res.json();
}

export const register = async (data) => {

    let res = await fetch(`${url}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return res.json();
}

export const logout = () => {
    return fetch(`${url}/logout`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify()
    })
        .then(res => res.json())
}

export const getUser = () => {
    let username = sessionStorage.getItem('username')
    return username;
}

export const getToken = () => {
    let token = sessionStorage.getItem('token')
    return token;
}

export const logoutUser = () => {
    let userLogout =  sessionStorage.removeItem('token');
    let tokenLogout = sessionStorage.removeItem('username');

    return userLogout, tokenLogout
}