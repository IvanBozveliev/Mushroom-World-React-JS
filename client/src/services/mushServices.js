const url = 'http://localhost:5000/products';

export const getAll = (mushType) => {

    let newUrl = url;

    if (mushType && mushType !== 'all') {
        newUrl = url + `?mushType=${mushType}`
    }
    return fetch(newUrl, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + sessionStorage.token,
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .catch(error => console.log(error))
}

export const getOne = (mushId) => {
    return fetch(`${url}/${mushId}`)
        .then(res => res.json())
        .catch(error => console.log(error))
}

export const create = (mushData) => {

    return fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + sessionStorage.token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(mushData)
    })
        .then(res => res.json())
        
        .catch(error => console.log(error))
}

export const editOne = (mushId, mushdata) => {
    return fetch(`${url}/${mushId}`, {
        method: "PUT",
        headers: {
            'Authorization': 'Bearer ' + sessionStorage.token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(mushdata)
    })
        .then(res => res.json())
        .catch(error => console.log(error))
}

export const deleteOne = (id) => {

    return fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
            'Authorization': 'Bearer ' + sessionStorage.token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify()
    })
        .then(res => res.json())
        .catch(error => console.log(error))
        
}