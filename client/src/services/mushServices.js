const url = 'http://localhost:5000/products';

export const getAll = () => {

    return fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + sessionStorage.token,
            'Content-Type': 'application/json'
        }
    })
              .then(res => res.json())
              .then(data => data)
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
             .then(data => data)
             .catch(error => console.log(error))
}

export const edit = (id, mushdata) => {
    return fetch(`${url}/${id}`, {
        method: "POST",
        headers: {
            'Authorization': 'Bearer ' + sessionStorage.token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(mushdata)
    })
             .then(res => res.json())
             .then(data => data)
             .catch(error => console.log(error))
}