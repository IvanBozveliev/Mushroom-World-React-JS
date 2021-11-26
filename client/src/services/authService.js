const url = 'http://localhost:5000/auth';

export const login = async (data) => {
    
    let res = await fetch(`${url}/login`, {
        method: 'POST',
       // mode: 'cors',
        // cache:'no-cache',
        // credentials: 'same-origin',
        headers: {
            //'Accept': 'application/json',
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
        .then(res => console.log(res) )//res.json())
}

export const getUser = () => {
    let username = sessionStorage.getItem('username')
    return username;
}

export const logoutUser = () => {
    let userLogout =  sessionStorage.removeItem('token');
    let tokenLogout = sessionStorage.removeItem('username');

    return userLogout, tokenLogout
}