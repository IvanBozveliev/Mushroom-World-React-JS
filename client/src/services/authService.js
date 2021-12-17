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
